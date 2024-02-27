// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  // //function getLearnerData(course, ag, submissions) {
  //   // here, we would process this data to achieve the desired result.
  //   const result = [
  //     {
  //       id: 125,
  //       avg: 0.985, // (47 + 150) / (50 + 150)
  //       1: 0.94, // 47 / 50
  //       2: 1.0 // 150 / 150
  //     },
  //     {
  //       id: 132,
  //       avg: 0.82, // (39 + 125) / (50 + 150)
  //       1: 0.78, // 39 / 50
  //       2: 0.833 // late: (140 - 15) / 150
  //     }
  //   ];
  
  //   return result;
  // }
  
  //const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  //console.log(result);
  
  // Declare variables properly using let and const where appropriate.
  function getLearnerData(course, ag, submissions) {
    // Object to store processed learner data.
    const learnerData = {};
  
    // Constants for zero assignment ratio and error message.
    const zeroAssignmentRatio = 0;
    const errorMessage = "There was an error processing the data.";
  
    // Find the assignment information based on assignmentId.
      const assignment = ag.assignments.find(a => a.id === assignmentId);
  
      // Check if the assignment exists, if not, log an error message.
      if (!assignment) {
        console.error(`Error: Assignment with id ${assignmentId} not found.`);
        continue;
      }
  
    // Calculate points possible for the assignment.
    const pointsPossible = assignment.points_possible; 
  
    //loop
    submissions.forEach(submission => {
      const { learner_id: learnerId, assignment_id: assignmentId, submission: { score } } = submission;
  
       // Calculate averages for each learner using a loop.
    for (const learnerId in learnerData) {
      const learner = learnerData[learnerId];
      const numAssignments = learner.numAssignments;
  
      learner.avg = numAssignments > 0 ? learner.totalScore / (numAssignments * learner.totalPointsPossible) : 0;
    }
  
    return learnerData;
  }
  
  //use at least one loop control keyword such as break or contine
  for (let i = 0; i < submissions.length; i++) {
    const submission = submissions[i];
    
}
  
     // Use try/catch statements to manage potential errors.
  console.error("An error occurred:", error.message);
  return null; // 
  }
  
  // Get the learner data based on the provided inputs.
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  // Print the result if no errors occurred during processing.
  if (result !== null) {
    console.log(result);
  }