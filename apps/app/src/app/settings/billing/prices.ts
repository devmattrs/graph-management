enum Category {
    Content = 0,
    Sharing = 1,
    APIs = 2,
    Security = 3,
    Support = 4,
}
export const allFeatures = [
    {
        id: 1,
        name: "Nodes",
        category: Category.Content,
        type: "number",
        info: `This is the maximum number of nodes you can have in each workspace. A node can have one outgoing and one incoming edge 
        to it. If you have retention enabled this number includes all archived nodes`,
    },
    {
        id: 2,
        name: "Workspaces",
        category: Category.Content,
        type: "number",
        info: "A workspace is defined as a node without an immediate parent, click here to learn more",
    },
    {
        id: 3,
        name: "Upload size",
        category: Category.Content,
        type: "string",
        info: "This is the maximum size of stored objects such as images, documents, or spreadsheets",
    },
    {
        id: 4,
        name: "Retention length",
        category: Category.Content,
        type: "string",
        info: `Enabling rentention will allow you to view and restore deleted items up to a certain amount of time this can be disabled in the settings.`,
    },
    {
        id: 5,
        name: "Custom Lenses",
        category: Category.Content,
        type: "number",
        info: `Lenses are what you view your workspace from. The default lenses are status, priority, and progress. You can define custom lenses in the workspace settings. This number is the number of custom lenses per workspace`,
    },
    {
        id: 6,
        name: "AI (Weber)",
        category: Category.APIs,
        type: "boolean",
        info: `Weber helps you make sense of your workspace by answering questions, suggesting resources, and monitoring activity`,
    },
    {
        id: 7,
        name: "History scrub",
        category: Category.Content,
        type: "boolean",
        info: `History scrubbing works with archived nodes to show you your workspaces changes in realtime. You can playback the operations that happened over a period of time viewed through different lens.`,
    },
];

//These keys 'free','starter', 'business' should correspond (case insensitive) to the names of the products in Stripe
// this will map the details for each to the stripe table
export const pricing = {
    free: [
        { id: 1, value: 150 },
        { id: 2, value: 1 },
        { id: 3, value: "10 MB" },
        { id: 4, value: "10 days" },
        { id: 5, value: 1 },
    ],
    starter: [
        { id: 1, value: 500 },
        { id: 2, value: 3 },
        { id: 3, value: "40 MB" },
        { id: 4, value: "30 days" },
        { id: 5, value: 5 },
    ],
    business: [
        { id: 1, value: 10000 },
        { id: 2, value: 30 },
        { id: 3, value: "60 MB" },
        { id: 4, value: "6 months" },
        { id: 5, value: 15 },
    ],
};
