// ============================================
// QUESTIONS DATA — All 5 Sections
// ============================================

const quizData = {
    sections: [
        // ============================
        // SECTION A: BoT Graphs
        // ============================
        {
            id: "A",
            title: "Behaviour Over Time Graphs — BoT",
            subtitle: "10 Case-Based MCQs",
            caseParagraph: `A college noticed that student attendance was 88% at the beginning of the semester. After the first month, it dropped to 78%. Near mid-sem exams, attendance increased slightly because students wanted notes and revision help. After mid-sem, attendance again dropped to 65%. Near end-sem exams, attendance increased again for a short time, but after exams, it became very low. Teachers first saw this as a one-time attendance issue, but when they checked records from the last three semesters, they found the same pattern repeating again and again. The administration decided to study attendance over time instead of reacting only to one day's low attendance.`,
            type: "mcq",
            questions: [
                {
                    id: "A1",
                    text: "The teachers initially reacted to one day's low attendance, but later checked records from three semesters. Which shift in thinking does this show?",
                    options: [
                        "From pattern thinking to event thinking",
                        "From event thinking to pattern thinking",
                        "From stock analysis to flow analysis",
                        "From CLD analysis to Vensim modelling"
                    ],
                    correct: 1
                },
                {
                    id: "A2",
                    text: "If the administration wants to understand why attendance rises near exams and falls after exams repeatedly, which tool is most suitable first?",
                    options: [
                        "BoT graph, because it shows how attendance changes across time",
                        "CLD, because it directly gives exact numerical prediction",
                        "Vensim, because it removes the need for variables",
                        "Stock-flow diagram, because attendance is always a physical stock"
                    ],
                    correct: 0
                },
                {
                    id: "A3",
                    text: "Attendance increases near mid-sem and end-sem, but falls again later. What type of BoT pattern is most clearly visible?",
                    options: [
                        "Linear growth because attendance only increases continuously",
                        "Oscillation because attendance rises and falls repeatedly over time",
                        "Dynamic equilibrium because attendance is perfectly stable",
                        "Boom and bust because attendance permanently collapses after one rise"
                    ],
                    correct: 1
                },
                {
                    id: "A4",
                    text: "If the college studies only one week of attendance data after mid-sem exams, why might its conclusion be weak?",
                    options: [
                        "A short time horizon may hide the repeated semester-level pattern",
                        "Attendance cannot be measured weekly",
                        "BoT graphs require only one data point",
                        "Time horizon is useful only in CLDs, not in BoT graphs"
                    ],
                    correct: 0
                },
                {
                    id: "A5",
                    text: "Which of the following is the best variable name for drawing a BoT graph from this case?",
                    options: [
                        "Students becoming careless",
                        "Attendance rate",
                        "Teachers forcing students",
                        "Classes being ignored"
                    ],
                    correct: 1
                },
                {
                    id: "A6",
                    text: `The statement "attendance dropped from 88% to 65% during the semester and repeatedly increased near exams" is stronger than "students are lazy" because it:`,
                    options: [
                        "Blames students more clearly",
                        "Includes behaviour, change over time, measurement, and pattern",
                        "Avoids using any variable",
                        "Focuses only on one teacher's opinion"
                    ],
                    correct: 1
                },
                {
                    id: "A7",
                    text: "Students attend more near exams because they need notes and revision help. In BoT analysis, this exam period can be marked as:",
                    options: [
                        "A significant event or turning point on the time axis",
                        "A stock that stores attendance permanently",
                        "A mental model that cannot affect behaviour",
                        "An outflow from attendance rate"
                    ],
                    correct: 0
                },
                {
                    id: "A8",
                    text: "If the BoT graph shows the same attendance pattern in three semesters, what does it suggest?",
                    options: [
                        "The problem is probably systemic and recurring",
                        "The problem happened only once",
                        "Attendance has no relation with time",
                        "The college should ignore the pattern"
                    ],
                    correct: 0
                },
                {
                    id: "A9",
                    text: "Which conclusion is most aligned with Systems Thinking after reading the case?",
                    options: [
                        "Students are lazy, so punishment is the only solution",
                        "Attendance behaviour may be shaped by exam timing, motivation, teaching value, and semester structure",
                        "Attendance is random and cannot be studied",
                        "Only one student is responsible for the full attendance trend"
                    ],
                    correct: 1
                },
                {
                    id: "A10",
                    text: `In this case, BoT analysis mainly helps the administration move from asking "Why was attendance low today?" to asking:`,
                    options: [
                        `"Why does attendance follow this repeated pattern during the semester?"`,
                        `"Which classroom has the largest fan?"`,
                        `"Which student should be blamed first?"`,
                        `"How can we avoid measuring attendance?"`
                    ],
                    correct: 0
                }
            ]
        },

        // ============================
        // SECTION B: CLD
        // ============================
        {
            id: "B",
            title: "Causal Loop Diagrams — CLD",
            subtitle: "10 Case-Based MCQs",
            caseParagraph: `In a class, students started using phones more during study time. As phone usage increased, study hours decreased. Because study hours decreased, syllabus completion also decreased. When syllabus completion decreased, academic stress increased. As stress increased, focus decreased. Because focus decreased, study hours reduced even further. Some students tried to study more when stress became too high, and this helped reduce stress temporarily. The teacher wanted to create a diagram showing how phone usage, study hours, stress, focus, and syllabus completion were connected through cause-and-effect relationships.`,
            type: "mcq",
            questions: [
                {
                    id: "B1",
                    text: "The teacher wants to understand how phone usage, study hours, stress, and focus affect each other. Which tool best fits this purpose?",
                    options: [
                        "BoT graph, because it only shows trend lines over time",
                        "CLD, because it shows cause-effect relationships between variables",
                        "Stock-flow diagram, because phone usage must be stored in a tank",
                        "Ladder of inference, because it directly calculates marks"
                    ],
                    correct: 1
                },
                {
                    id: "B2",
                    text: `In the link "phone usage increases → study hours decrease," what polarity should be assigned?`,
                    options: [
                        "S, because both variables increase together",
                        "O, because one variable increases while the other decreases",
                        "R, because every arrow is reinforcing",
                        "B, because every negative link is balancing"
                    ],
                    correct: 1
                },
                {
                    id: "B3",
                    text: `In the link "study hours decrease → syllabus completion decreases," what is the correct interpretation?`,
                    options: [
                        "Same direction relationship because both move in the same direction",
                        "Opposite direction relationship because one increases and one decreases",
                        "Balancing loop because it has one arrow",
                        "No relationship because study hours are not measurable"
                    ],
                    correct: 0
                },
                {
                    id: "B4",
                    text: "Why does the phone usage loop become reinforcing in this case?",
                    options: [
                        "Because less study increases stress, stress reduces focus, and reduced focus further reduces study",
                        "Because every variable automatically becomes a stock",
                        "Because stress always creates stability immediately",
                        "Because phone usage disappears after one exam"
                    ],
                    correct: 0
                },
                {
                    id: "B5",
                    text: "The case says some students study more when stress becomes too high, which reduces stress temporarily. This shows:",
                    options: [
                        "A balancing loop trying to bring stress down",
                        "A reinforcing loop increasing stress forever",
                        "A mental model with no behaviour",
                        "A source and sink only"
                    ],
                    correct: 0
                },
                {
                    id: "B6",
                    text: "Which variable pair would most likely have an opposite relationship in the CLD?",
                    options: [
                        "Study hours and syllabus completion",
                        "Phone usage and study hours",
                        "Confidence and motivation",
                        "Practice and skill"
                    ],
                    correct: 1
                },
                {
                    id: "B7",
                    text: "If the teacher marks the whole loop as R, what is the most likely reason?",
                    options: [
                        "The loop amplifies the original problem and pushes study hours even lower",
                        "The loop always returns the system to a fixed target",
                        "The loop contains no cause-effect links",
                        "The loop is only a table, not a diagram"
                    ],
                    correct: 0
                },
                {
                    id: "B8",
                    text: "Suppose students start studying seriously today, but marks improve only after the exam. Which CLD concept explains this gap?",
                    options: [
                        "Delay",
                        "Source",
                        "Sink",
                        "Parameter"
                    ],
                    correct: 0
                },
                {
                    id: "B9",
                    text: "Which of the following is the best CLD variable name?",
                    options: [
                        "Students wasting time",
                        "Study hours",
                        "Students being irresponsible",
                        "Not completing syllabus"
                    ],
                    correct: 1
                },
                {
                    id: "B10",
                    text: "What is the biggest advantage of making a CLD for this case?",
                    options: [
                        "It helps blame one student clearly",
                        "It shows how connected variables create repeated stress behaviour",
                        "It removes the need for any explanation",
                        "It proves that phone usage is the only cause"
                    ],
                    correct: 1
                }
            ]
        },

        // ============================
        // SECTION C: Stock, Flow, Feedback
        // ============================
        {
            id: "C",
            title: "Stock, Flow, Feedback Loops & Dynamic Equilibrium",
            subtitle: "10 Case-Based MCQs",
            caseParagraph: `A small town depends on a reservoir for water. During the rainy season, rainwater enters the reservoir and increases the water level. During summer, households, farms, and industries use water from the reservoir, so the water level decreases. If rainfall is higher than water use, the reservoir level rises. If water use is higher than rainfall, the reservoir level falls. If rainfall and water use are equal, the reservoir remains stable. Over the years, population growth has increased water demand. Because water demand increased faster than rainfall and recharge, the reservoir level has slowly declined.`,
            type: "mcq",
            questions: [
                {
                    id: "C1",
                    text: "In this case, why is reservoir water level considered a stock?",
                    options: [
                        "Because it is an accumulated quantity measured at a point in time",
                        "Because it is a rate that only exists during rainfall",
                        "Because it is a belief about water use",
                        "Because it cannot change through flows"
                    ],
                    correct: 0
                },
                {
                    id: "C2",
                    text: "Rainwater entering the reservoir is called an inflow because it:",
                    options: [
                        "Decreases the reservoir level",
                        "Adds water to the reservoir stock",
                        "Removes water from the system",
                        "Represents a mental model"
                    ],
                    correct: 1
                },
                {
                    id: "C3",
                    text: "Household and industrial water use are outflows because they:",
                    options: [
                        "Add more water to the reservoir",
                        "Remove water from the reservoir stock",
                        "Keep water level always stable",
                        "Are not measurable"
                    ],
                    correct: 1
                },
                {
                    id: "C4",
                    text: "If rainfall is higher than water use for several months, what should happen to the reservoir stock?",
                    options: [
                        "It should rise because inflow is greater than outflow",
                        "It should fall because inflow always reduces stock",
                        "It should become a mental model",
                        "It should stop being a system"
                    ],
                    correct: 0
                },
                {
                    id: "C5",
                    text: "If population growth increases demand faster than recharge, why does the reservoir level decline?",
                    options: [
                        "Because outflow becomes stronger than inflow over time",
                        "Because dynamic equilibrium means decline",
                        "Because stocks cannot be affected by population",
                        "Because rainwater is not a flow"
                    ],
                    correct: 0
                },
                {
                    id: "C6",
                    text: "The reservoir remains stable when rainfall and water use are equal. This condition is called:",
                    options: [
                        "Reinforcing collapse",
                        "Dynamic equilibrium",
                        "Reality bias",
                        "Tragedy of commons"
                    ],
                    correct: 1
                },
                {
                    id: "C7",
                    text: "Which statement shows the correct stock-flow logic?",
                    options: [
                        "To increase reservoir water, increase inflow or reduce outflow",
                        "To increase reservoir water, increase only water use",
                        "Stocks change without any inflows or outflows",
                        "Outflow always increases stock"
                    ],
                    correct: 0
                },
                {
                    id: "C8",
                    text: "Why might the reservoir decline slowly instead of immediately?",
                    options: [
                        "Stocks often change gradually because they accumulate over time",
                        "Flows never affect stocks",
                        "Reservoir water is not measurable",
                        "Dynamic equilibrium causes instant collapse"
                    ],
                    correct: 0
                },
                {
                    id: "C9",
                    text: "If the town sees water level falling but continues increasing water use, what risk is most likely?",
                    options: [
                        "Long-term depletion of the reservoir stock",
                        "Perfect stability forever",
                        "Immediate creation of more rainfall",
                        "Removal of all feedback loops"
                    ],
                    correct: 0
                },
                {
                    id: "C10",
                    text: "Which pair is correctly matched?",
                    options: [
                        "Reservoir level — flow; rainfall — stock",
                        "Reservoir level — stock; rainfall — inflow",
                        "Water use — stock; population — sink",
                        "Recharge — mental model; reservoir — paradigm"
                    ],
                    correct: 1
                }
            ]
        },

        // ============================
        // SECTION D: Leverage Points & Mental Models
        // ============================
        {
            id: "D",
            title: "Leverage Points & Mental Models",
            subtitle: "10 Case-Based MCQs",
            caseParagraph: `A university wanted to improve student learning. Earlier, the system focused mainly on marks, strict attendance, and punishment. Students believed that the goal of college was only to pass exams. Teachers also felt pressure to complete the syllabus quickly, even if students did not understand deeply. The university first tried small changes, such as increasing attendance fines and changing passing marks. These changes had limited impact. Later, the university redesigned the timetable, improved feedback from students, changed project evaluation rules, encouraged self-learning, and shifted the goal from "scoring marks" to "deep learning and skill development." Slowly, student engagement improved.`,
            type: "mcq",
            questions: [
                {
                    id: "D1",
                    text: "Why did increasing attendance fines have limited impact in this case?",
                    options: [
                        "It changed only a parameter, not the deeper learning structure",
                        "It completely changed the paradigm of education",
                        "It removed all feedback loops from the university",
                        "It created dynamic equilibrium immediately"
                    ],
                    correct: 0
                },
                {
                    id: "D2",
                    text: "Changing passing marks is considered a weak leverage point because:",
                    options: [
                        "It changes a number but may not change how students learn",
                        "It always transforms mental models instantly",
                        "It is the same as self-organization",
                        "It removes the need for teaching quality"
                    ],
                    correct: 0
                },
                {
                    id: "D3",
                    text: "Improving feedback from students is powerful because it changes:",
                    options: [
                        "Information flow in the system",
                        "Only the colour of classrooms",
                        "The number of desks only",
                        "The source and sink of water"
                    ],
                    correct: 0
                },
                {
                    id: "D4",
                    text: "Changing project evaluation rules may improve learning because rules decide:",
                    options: [
                        "What behaviour is rewarded or discouraged",
                        "Only the weather outside the class",
                        "Only the physical height of students",
                        "Nothing important in the system"
                    ],
                    correct: 0
                },
                {
                    id: "D5",
                    text: `Shifting the purpose from "scoring marks" to "deep learning" is a stronger intervention because it changes:`,
                    options: [
                        "The goal of the system",
                        "Only a parameter",
                        "Only one event",
                        "Only a temporary buffer"
                    ],
                    correct: 0
                },
                {
                    id: "D6",
                    text: `The belief "college is only for passing exams" is important because it:`,
                    options: [
                        "Acts as a mental model shaping student behaviour",
                        "Is an inflow into attendance stock",
                        "Is a source or sink outside the system",
                        "Is only a Vensim software feature"
                    ],
                    correct: 0
                },
                {
                    id: "D7",
                    text: "Encouraging self-learning and student-led projects supports self-organization because it:",
                    options: [
                        "Allows students to adapt, experiment, and create learning structures",
                        "Forces all students to follow only one fixed method",
                        "Removes feedback from the system",
                        "Focuses only on punishment"
                    ],
                    correct: 0
                },
                {
                    id: "D8",
                    text: "Which change reflects a deeper paradigm shift?",
                    options: [
                        `From "education means marks" to "education means learning and skill development"`,
                        "From ₹100 fine to ₹200 fine",
                        "From blue notice board to green notice board",
                        "From one classroom to another classroom"
                    ],
                    correct: 0
                },
                {
                    id: "D9",
                    text: "If the university wants sustainable improvement, which intervention is most aligned with Systems Thinking?",
                    options: [
                        "Change deeper goals, rules, feedback, and learning culture together",
                        "Only increase punishment every month",
                        "Ignore student feedback",
                        "Focus only on one day's low attendance"
                    ],
                    correct: 0
                },
                {
                    id: "D10",
                    text: "Which option correctly orders leverage point strength from weaker to deeper?",
                    options: [
                        "Parameters → Information flows/rules → Goals/paradigms",
                        "Goals → Parameters → Rules",
                        "Paradigms → Fines → Numbers",
                        "Buffers → Events → Attendance sheets"
                    ],
                    correct: 0
                }
            ]
        },

        // ============================
        // SECTION E: Fill in the Blanks
        // ============================
        {
            id: "E",
            title: "Long Case Study — Fill in the Blanks",
            subtitle: "20 Keyword-Based Questions",
            caseParagraph: `A large city has been facing severe air pollution every winter for the last ten years. Every November and December, the pollution level rises sharply. The government usually reacts by closing schools for a few days, banning construction temporarily, and asking people to stay indoors. These actions reduce exposure for a short time, but the pollution problem returns every year.\n\nThe city has many connected causes. Vehicle emissions increase due to rising private car ownership. Industrial activity adds pollutants to the air. Construction dust becomes worse when building rules are not followed. Crop burning in nearby regions adds smoke during winter. Weather conditions trap pollutants near the ground. Citizens often believe that pollution is only the government's responsibility, so they do not change their own transport or consumption behaviour.\n\nExperts suggest that the city should stop only reacting to pollution events and instead study the pattern over time. They recommend using BoT graphs to track air pollution levels across years and CLDs to understand cause-effect relationships. A stock-flow view can also help: the pollution level in the air can be seen as a stock, while emissions from vehicles, industries, and crop burning are inflows. Wind movement and natural cleaning processes are outflows. If inflows are greater than outflows, pollution rises. If outflows are greater than inflows, pollution falls.\n\nThe experts also say that deeper leverage points are needed. Visible pollution data, public transport improvement, strict emission rules, construction dust control, crop-burning alternatives, and changing the city's goal from "temporary pollution control" to "clean air throughout the year" can create long-term system change.`,
            type: "fib",
            keywords: [
                "Event", "Pattern", "System Structure", "Mental Model", "BoT Graph",
                "Variable", "Problem Formulation", "Feedback Loop", "Reinforcing Loop",
                "Balancing Loop", "Delay", "CLD", "S Relationship", "O Relationship",
                "Stock", "Flow", "Inflow", "Outflow", "Dynamic Equilibrium",
                "Leverage Point", "Information Flow", "Rules", "Goals", "Paradigm",
                "Buffer", "Fixes That Fail", "Long-Term System Change"
            ],
            questions: [
                {
                    id: "E1",
                    text: "Pollution rising every winter for ten years is better understood as a repeated __________ rather than a one-time incident.",
                    answer: "Pattern",
                    acceptableAnswers: ["pattern", "patterns"]
                },
                {
                    id: "E2",
                    text: "One specific day when pollution becomes extremely high and schools are closed is an __________.",
                    answer: "Event",
                    acceptableAnswers: ["event", "an event"]
                },
                {
                    id: "E3",
                    text: "If the city plots pollution levels from 2015 to 2025 to see the winter rise each year, it is using a __________.",
                    answer: "BoT Graph",
                    acceptableAnswers: ["bot graph", "bot", "behaviour over time graph", "behavior over time graph", "bot graphs"]
                },
                {
                    id: "E4",
                    text: "Pollution level, number of private cars, industrial emissions, and construction dust are __________ because they can change over time.",
                    answer: "Variable",
                    acceptableAnswers: ["variable", "variables"]
                },
                {
                    id: "E5",
                    text: `The statement "Air pollution rises sharply every November and December for the last ten years" is a good __________ because it mentions behaviour and time.`,
                    answer: "Problem Formulation",
                    acceptableAnswers: ["problem formulation", "problem statement"]
                },
                {
                    id: "E6",
                    text: "A diagram connecting vehicles, industries, crop burning, weather conditions, and pollution through arrows is a __________.",
                    answer: "CLD",
                    acceptableAnswers: ["cld", "causal loop diagram"]
                },
                {
                    id: "E7",
                    text: `"More private cars lead to more vehicle emissions" is an __________ because both variables move in the same direction.`,
                    answer: "S Relationship",
                    acceptableAnswers: ["s relationship", "s relation", "same direction relationship", "s"]
                },
                {
                    id: "E8",
                    text: `"More wind movement leads to lower pollution concentration" is an __________ because one variable increases while the other decreases.`,
                    answer: "O Relationship",
                    acceptableAnswers: ["o relationship", "o relation", "opposite direction relationship", "o", "opposite relationship"]
                },
                {
                    id: "E9",
                    text: "The amount of pollution accumulated in city air at a particular time can be treated as a __________.",
                    answer: "Stock",
                    acceptableAnswers: ["stock"]
                },
                {
                    id: "E10",
                    text: "Emissions from vehicles, industries, and crop burning add pollution into the air, so they act as __________.",
                    answer: "Inflow",
                    acceptableAnswers: ["inflow", "inflows"]
                },
                {
                    id: "E11",
                    text: "Wind movement and natural cleaning processes remove pollution from the air, so they act as __________.",
                    answer: "Outflow",
                    acceptableAnswers: ["outflow", "outflows"]
                },
                {
                    id: "E12",
                    text: "If pollution added to the air equals pollution removed from the air, the pollution level becomes stable; this is called __________.",
                    answer: "Dynamic Equilibrium",
                    acceptableAnswers: ["dynamic equilibrium"]
                },
                {
                    id: "E13",
                    text: `Citizens believing "pollution is only the government's responsibility" is a __________ because it shapes their behaviour.`,
                    answer: "Mental Model",
                    acceptableAnswers: ["mental model", "mental models"]
                },
                {
                    id: "E14",
                    text: "Closing schools and banning construction temporarily may become __________ if these actions reduce exposure but do not fix root causes.",
                    answer: "Fixes That Fail",
                    acceptableAnswers: ["fixes that fail", "fix that fail", "fixes that fails"]
                },
                {
                    id: "E15",
                    text: "Real-time air quality displays improve __________ because people can see the condition of the system clearly.",
                    answer: "Information Flow",
                    acceptableAnswers: ["information flow", "information flows"]
                },
                {
                    id: "E16",
                    text: "Strict emission standards and construction dust control laws are examples of changing system __________.",
                    answer: "Rules",
                    acceptableAnswers: ["rules", "rule"]
                },
                {
                    id: "E17",
                    text: `Changing the city's aim from "temporary pollution control" to "clean air throughout the year" means changing system __________.`,
                    answer: "Goals",
                    acceptableAnswers: ["goals", "goal"]
                },
                {
                    id: "E18",
                    text: "The time gap between improving public transport and seeing reduced pollution is called a __________.",
                    answer: "Delay",
                    acceptableAnswers: ["delay", "time delay"]
                },
                {
                    id: "E19",
                    text: "A smart intervention point where a small change can create a large system effect is called a __________.",
                    answer: "Leverage Point",
                    acceptableAnswers: ["leverage point", "leverage points"]
                },
                {
                    id: "E20",
                    text: "Sustainable improvement in air quality requires __________ instead of only reacting to pollution days.",
                    answer: "Long-Term System Change",
                    acceptableAnswers: ["long-term system change", "long term system change", "system change"]
                }
            ]
        }
    ]
};
