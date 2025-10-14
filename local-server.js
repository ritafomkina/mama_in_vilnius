"use strict";

const http = require("node:http");
const fs = require("node:fs");

const hostname = "127.0.0.1";
const port = 3000;

const articlesFolder = "./src/assets";

class CustomError {
    constructor(statusCode, json) {
        this.statusCode = statusCode;
        this.json = json;
    }
}

// function parseUrl(url) {
//     const [url, queryString] = url.split("?");
//     const queryParams = (queryString || "").split("&").reduce((acc, curr) => {
//         const [key, value] = curr.split("=");
//         return { ...acc, [key]: value };
//     }, {});
//     return { url, queryParams };
// }

async function parseBody(request) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        request.on("data", (chunk) => chunks.push(chunk));
        request.on("end", () => {
            let body = {};
            if (chunks.length) {
                try {
                    body = JSON.parse(Buffer.concat(chunks));
                } catch (error) {
                    reject(
                        new CustomError(400, {
                            error: error.message,
                            message: "Invalid JSON body",
                        }),
                    );
                }
            }
            resolve(body);
        });
    });
}

const server = http.createServer(async (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    response.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    response.setHeader("Content-Type", "application/json");

    if (request.method === "OPTIONS") {
        response.writeHead(204);
        response.end();
        return;
    }

    try {
        if (
            request.method === "GET" &&
            new RegExp("\/ping$").test(request.url)
        ) {
            response.statusCode = 200;
            response.end(JSON.stringify({ message: "pong" }));
            return;
        }

        if (
            request.method === "PUT" &&
            new RegExp("\/articles").test(request.url)
        ) {
            const articlePath = request.url;
            if (!articlePath) {
                throw new CustomError(400, {
                    message: "articlePath query param is required",
                });
            }

            const body = await parseBody(request);
            const md = body["md"];
            if (!md) {
                throw new CustomError(400, {
                    message: "md field is required",
                });
            }

            const title = body["title"];
            if (!md) {
                throw new CustomError(400, {
                    message: "title field is required",
                });
            }

            fs.writeFileSync(
                `${articlesFolder}/${articlePath}.json`,
                JSON.stringify({ title, md }),
            );

            console.log(`updated ${articlePath}`);
            response.statusCode = 200;
            response.end(JSON.stringify({ message: "Success" }));
            return;
        }

        if (
            request.method === "GET" &&
            new RegExp("\/articles").test(request.url)
        ) {
            const articlePath = request.url;
            if (!articlePath) {
                throw new CustomError(400, {
                    message: "articlePath query param is required",
                });
            }

            const fileBuffer = fs.readFileSync(
                `${articlesFolder}/${articlePath}.json`,
            );

            console.log(`read ${articlePath}`);
            response.statusCode = 200;
            response.end(fileBuffer);
            return;
        }

        throw new CustomError(405, {
            message: "Method not allowed",
        });
    } catch (error) {
        console.error(error);
        if (error instanceof CustomError) {
            response.statusCode = error.statusCode;
            response.end(JSON.stringify(error.json));
        } else {
            response.statusCode = 500;
            response.end(
                JSON.stringify({
                    error: error.message,
                    message: "Internal server error",
                }),
            );
        }
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
