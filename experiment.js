// Loads jsPsych
var jsPsych = initJsPsych({});

// initial variables
var animals = ["wombats", "jellyfish", "swallows", "anoles"]; 
var order = jsPsych.randomization.repeat([0, 1, 2, 3], 1);
var prompt = "Write down what you learned about ";
var currentSentence = "";

// Timeline that holds javascript variables (instructions, stimuli) to appear in chronological order 
var timeline = [
];

// unique id
const subject_id = jsPsych.randomization.randomID(10);
const filename = `${subject_id}.csv`;

/* RUNNING THE EXPERIMENT */
// Instructions
var instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<p>You will be presented with four passages. After every passage, you will be asked to write all that you've learned from it. You will not be able to refer back to the passages. Please do not skip any questions, and answer as thoroughly as possible.</p><p>Press the 'b' key to begin.</p>",
    choices: ["b"],
};

timeline.push(instructions);

// trial 1
var passage_1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: passages[order[0]],
    choices: ["I'm done reading, and am ready to move on"]
}

currentSentence = prompt + animals[order[0]] + ".";

var question_1 = {
    type: jsPsychSurveyText,
    questions: [
        {prompt: currentSentence, rows: 12}
    ]
}

timeline.push(passage_1, question_1);

// trial 2
var passage_2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: passages[order[1]],
    choices: ["I'm done reading, and am ready to move on"]
}

currentSentence = prompt + animals[order[1]] + ".";

var question_2 = {
    type: jsPsychSurveyText,
    questions: [
        {prompt: currentSentence, rows: 12}
    ]
}

timeline.push(passage_2, question_2);

// trial 3
var passage_3 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: passages[order[2]],
    choices: ["I'm done reading, and am ready to move on"]
}

currentSentence = prompt + animals[order[2]] + ".";

var question_3 = {
    type: jsPsychSurveyText,
    questions: [
        {prompt: currentSentence, rows: 12}
    ]
}

timeline.push(passage_3, question_3);

// trial 4
var passage_4 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: passages[order[3]],
    choices: ["I'm done reading, and am ready to move on"]
}

currentSentence = prompt + animals[order[3]] + ".";

var question_4 = {
    type: jsPsychSurveyText,
    questions: [
        {prompt: currentSentence, rows: 12}
    ]
}

timeline.push(passage_4, question_4);

// feedback (pilot only)
var feedback = {
    type: jsPsychSurveyText,
    questions: [
        {prompt: "<p>You've completed all four passages. Please do NOT exit out of the experiment yet.</p><p>If you have any feedback (i.e. any issues you encountered, if you noticed errors with the passages, if you thought the passages were too easy/too hard, etc), you can write in the box below.</p>", rows: 8}
    ]
}

timeline.push(feedback);

// datapipe stuff
const save_data = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "98vGvEoRFD20",
    filename: filename,
    data_string: ()=>jsPsych.data.get().csv()
  };

  timeline.push(save_data);


//exit message
var goodbye = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Thanks for participating! You can close the window now."
}

timeline.push(goodbye);

jsPsych.run(timeline);
