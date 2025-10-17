import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    output,
} from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';

import { Topic } from '@models';
import { TOPICS } from '@core/constants';

type ThreeNode = Topic & {
    selected?: boolean;
    topics?: ThreeNode[];
    parent?: ThreeNode;
};

@Component({
    selector: 'app-three',
    standalone: true,
    imports: [MatTreeModule, MatButtonModule, MatIconModule],
    templateUrl: './three.component.html',
    styleUrl: './three.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreeComponent {
    public select = output<Topic | undefined>();

    public childrenAccessor = (node: ThreeNode) => node.topics ?? [];

    public dataSource = ThreeComponent.linkTopics(TOPICS);

    private selectedNode: ThreeNode | undefined;

    public hasChild = (_: number, node: ThreeNode) =>
        !!node.topics && node.topics.length > 0;

    @HostListener('click') public onClick() {
        this.nodeToggle();
    }

    public nodeToggle(node?: ThreeNode) {
        if (this.selectedNode) {
            ThreeComponent.unselectRecursively(this.selectedNode);
            this.selectedNode = undefined;
        }
        if (node) {
            this.selectedNode = node;
            ThreeComponent.selectRecursively(this.selectedNode);
        }
        this.select.emit(this.selectedNode);
    }

    public static linkTopics(topics: Topic[], parent?: ThreeNode): ThreeNode[] {
        const three: ThreeNode[] = [];
        for (const topic of topics) {
            const node: ThreeNode = {
                ...topic,
                parent,
            };
            if (topic.topics?.length) {
                node.topics = ThreeComponent.linkTopics(topic.topics, node);
            }
            three.push(node);
        }
        return three;
    }

    public static unselectRecursively(node: ThreeNode) {
        delete node.selected;
        if (node.parent) {
            ThreeComponent.unselectRecursively(node.parent);
        }
    }

    public static selectRecursively(node: ThreeNode) {
        node.selected = true;
        if (node.parent) {
            ThreeComponent.selectRecursively(node.parent);
        }
    }
}
