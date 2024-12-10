import axios from "axios";
let feedback_request_data = {};
let feedback_accepted_data = {};
let ongoing_projects_data = {};
let completed_projects_data = {};

const tables = {
    table_name: "feedback_request",
    table_name1: "feedback_accepted", 
    table_name2: "ongoing_projects",
    table_name3: "completed_projects"
};

try {
    const response = await axios({
        method: 'POST',
        url: 'http://localhost:3000/crud/receiveData.php',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: tables,
    });
    feedback_request_data = response.data.feedback_request_data;
    feedback_accepted_data = response.data.feedback_accepted_data;
    ongoing_projects_data = response.data.ongoing_projects_data;
    completed_projects_data = response.data.completed_projects_data;

} catch (error) {
    // Handle errors
    console.error("Error submitting form:", error);
    alert("Failed to submit the form. Please try again.", error);
}
const CardsData = [
    {
        id: 1,
        name: 'OnGoing Projects',
        cards: ongoing_projects_data,
        tag: "ongoing_projects"
    },
    {
        id: 2,
        name: 'Completed Projects',
        cards: completed_projects_data,
        tag: "completed_projects"
    },
    {
        id: 3,
        name: 'Feedback Requests',
        cards: feedback_request_data,
        tag: "feedback_request"

    },
    {
        id: 4,
        name: 'Accepted Feedbacks',
        cards: feedback_accepted_data,
        tag: "feedback_accepted"
    },
]


export default CardsData;