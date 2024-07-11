interface projectData {
    name: string
    routerKey: string
    description: string
    type: string
    color: string
}

export const projects = [
    {
        name: "Escape the Spreading Fire",
        routerKey: "project-algorithms-fireEscape",
        description: "Employing Double BFS algorithm and Binary Search, find the maximum time a man can stay that he can safely reach the safehouse locating at bottom-right corner of the room from the top-left corner (0,0) of the room with spreading fire and wall obstacles.",
        type: "algorithm",
        color: "#ffdcda"
    }
]

export type { projectData }