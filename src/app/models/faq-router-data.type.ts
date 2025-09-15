import { Breadcrumb } from './breadcrumb.type';
import { NavigationItem } from './navigation-item.type';

export type FaqRouterData = {
    title: string;
    breadcrumbs: Breadcrumb[];
    navigationItems?: NavigationItem[];
    articlePath?: string;
    rootTopic?: boolean;
};
