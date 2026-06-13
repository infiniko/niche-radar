import {
    CardsIcon,
    FadersIcon,
    FileTxtIcon,
    MagnifyingGlassIcon,
    PresentationChartIcon,
    SparkleIcon,
    TrendUpIcon,
} from "@phosphor-icons/react";

export const featuresData = [
    {
        id: 1,
        icon: MagnifyingGlassIcon,
        title: 'Reddit Analysis',
        description: 'Deep dive into community discussions, pain points, and user sentiment across relevant subreddits.'
    },
    {
        id: 2,
        icon: TrendUpIcon,
        title: 'Google Trends',
        description: 'Track search volume, growth trends, and seasonal patterns to understand market demand.'
    },
    {
        id: 3,
        icon: SparkleIcon,
        title: 'AI Insights',
        description: 'Get comprehensive market analysis, opportunity assessments, and strategic recommendations.'
    },
    {
        id: 4,
        icon: FileTxtIcon,
        title: 'Full Reports',
        description: 'Competition analysis, monetization ideas, and go-to-market strategies all in one place.'
    },
]


export const navigationItems = [
    { id: 1, name: 'Dashboard', url: '/dashboard', icon: PresentationChartIcon },
    { id: 2, name: 'Reports', url: '/dashboard/reports', icon: CardsIcon },
    { id: 3, name: 'Settings', url: '/dashboard/settings', icon: FadersIcon },
]