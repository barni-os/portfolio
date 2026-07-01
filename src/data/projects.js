const BASE = import.meta.env.BASE_URL;
export const projects = [
    {
        id: 1,
        title: "ball balancing beam",
        description: "utilizing control systems methadology to balance a ball on a beam without the use of encoders",
        longDescription: `Used matlab and eulers method to simulate a control system to be implemented through an arduino using the least squares library to reduce the noise to overcome the removal of an encoder  `,
        tech: ["control systems", "neural nets"],
        status: "complete",
        progress: 100,
        //repo: "https://github.com/...",
        repo: "",
        link: "",
        images: [
            // Put image files in public/projects/1/ and list them here
            // e.g. BASE + "projects/1/tile-layout.jpg"
        ],
        videos: [
            // Paste YouTube embed URLs here
            // e.g. "https://www.youtube.com/embed/YOUR_VIDEO_ID"
        ],
        documents: [
            // Put PDFs in public/projects/1/ and list them here
            // e.g. { label: "Technical Report", file: BASE + "projects/1/report.pdf" }
            {label: "technical report", file: BASE + "projects/1/reportmtrn4066.pdf"}
            
        ],
    },
    {
        id: 2,
        title: "Comaparitive analysis of montecarlo simulations using fpgas ",
        description: " in works",
        tech: ["embedded systems", "verilog programming"],
        status: "in-progress",
        progress: 10,
        repo: "",
        link: "",
        images: [
            // Put image files in public/projects/1/ and list them here
            // e.g. BASE + "projects/1/tile-layout.jpg"
        ],
        videos: [
            // Paste YouTube embed URLs here
            // e.g. "https://www.youtube.com/embed/YOUR_VIDEO_ID"
        ],
        documents: [
            // Put PDFs in public/projects/1/ and list them here
            // e.g. { label: "Technical Report", file: BASE + "projects/1/report.pdf" }
        ],
    },

];