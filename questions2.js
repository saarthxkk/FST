// ============================================
// SET 2 QUESTIONS DATA
// ============================================

const quizDataSet2 = {
    sections: [
        {
            id: "A",
            title: "Iceberg Model and Systemic Problems",
            subtitle: "10 Case-Based MCQs",
            caseParagraph: `A university noticed that many students were submitting assignments late. At first, teachers reacted by giving warnings and cutting marks. However, the same issue continued in every course. When the academic team studied the situation deeply, they found that students were receiving multiple assignments from different subjects in the same week. Many students also had poor planning habits, weak understanding of deadlines, and a belief that assignments could be completed one night before submission. The university realized that late submission was not only an individual discipline problem but a repeated pattern created by workload structure, student habits, and mental models.`,
            type: "mcq",
            questions: [
                { id: "A1", text: "Teachers initially reacted by giving warnings and cutting marks. At which Iceberg level were they mainly operating?", options: ["Events, because they reacted to visible late submissions", "Mental models, because they changed deep beliefs", "System structure, because they redesigned workload", "Patterns, because they studied many semesters first"], correct: 0 },
                { id: "A2", text: "The fact that late submissions happened again and again in every course shows:", options: ["A recurring pattern, not just one isolated incident", "A closed system with no relationships", "A stock-flow balance", "A dynamic equilibrium"], correct: 0 },
                { id: "A3", text: "Multiple assignments being due in the same week is an example of:", options: ["System structure influencing student behaviour", "A mental model only", "A random event with no cause", "A source or sink"], correct: 0 },
                { id: "A4", text: `The belief "I can complete assignments one night before submission" is best understood as:`, options: ["A mental model shaping behaviour", "An inflow into assignment stock", "A buffer against stress", "A Vensim symbol"], correct: 0 },
                { id: "A5", text: "Which question best reflects Systems Thinking in this case?", options: ["Which student should be punished the most?", "What structure makes late submission repeat across courses?", "How can we ignore the pattern?", "Which assignment has the longest title?"], correct: 1 },
                { id: "A6", text: "If the university only increases penalties but does not change assignment scheduling, what may happen?", options: ["The visible event may reduce temporarily, but the root structure remains", "The system will automatically become perfect", "All mental models will disappear", "Students will never face workload pressure again"], correct: 0 },
                { id: "A7", text: "Which option correctly matches the Iceberg levels in this case?", options: ["Event: late assignment today; Pattern: repeated late submissions; Structure: overlapping deadlines; Mental model: one-night completion belief", "Event: workload structure; Pattern: belief; Structure: one student; Mental model: deadline date", "Event: university policy; Pattern: classroom wall; Structure: exam hall; Mental model: timetable colour", "Event: inflow; Pattern: outflow; Structure: stock; Mental model: cloud"], correct: 0 },
                { id: "A8", text: `Why is "students are careless" a weak explanation?`, options: ["It blames individuals and ignores workload structure and repeated patterns", "It includes all system variables clearly", "It is a complete CLD", "It explains stock and flow perfectly"], correct: 0 },
                { id: "A9", text: "A better intervention would be:", options: ["Coordinate assignment deadlines and teach planning skills", "Only punish students more heavily", "Stop collecting data", "Ignore repeated late submissions"], correct: 0 },
                { id: "A10", text: "The deepest intervention would involve changing:", options: ["Students' belief about preparation and time management", "Only the font size of assignments", "Only one submission date randomly", "Only the classroom seating plan"], correct: 0 }
            ]
        },
        {
            id: "B",
            title: "System Archetypes and Game Theory",
            subtitle: "10 Case-Based MCQs",
            caseParagraph: `Two food stalls on campus sell similar snacks. At first, both kept normal prices and earned stable profits. One stall reduced prices to attract more students. The second stall felt threatened and also reduced prices. Then the first stall reduced prices further. Students enjoyed cheaper food, but both stalls started earning less profit. Even though both owners knew that maintaining reasonable prices would be better for both, neither wanted to increase prices alone because they feared losing customers. Slowly, the competition became harmful for both stalls.`,
            type: "mcq",
            questions: [
                { id: "B1", text: "This case mainly shows which system archetype?", options: ["Escalation, because both stalls keep reacting competitively", "Dynamic equilibrium, because profits stay perfectly stable", "Tragedy of commons, because water is shared", "Stock-flow structure, because snacks are a reservoir"], correct: 0 },
                { id: "B2", text: "When one stall cuts price and the other responds by cutting price too, the behaviour shows:", options: ["A feedback loop where each side's action influences the other", "A closed system with no interaction", "A stock that cannot change", "A mental model without behaviour"], correct: 0 },
                { id: "B3", text: "The best collective outcome for both stalls would be:", options: ["Both maintain reasonable prices and stable profits", "Both keep cutting prices until losses increase", "One stall closes immediately", "Both ignore customers completely"], correct: 0 },
                { id: "B4", text: "Why does the bad outcome become stable?", options: ["Each stall fears losing customers if it raises price alone", "Both stalls have unlimited profit", "Students stop buying snacks completely", "Price has no effect on customers"], correct: 0 },
                { id: "B5", text: "In game theory, when no player wants to change strategy alone because doing so may make them worse off, it is called:", options: ["Nash Equilibrium", "Inflow", "Buffer", "Iceberg Model"], correct: 0 },
                { id: "B6", text: "Cutting price may appear rational for one stall, but collectively both stalls suffer. This shows:", options: ["Individual rationality can create collectively poor outcomes", "Collective rationality always fails immediately", "Systems have no incentives", "CLDs cannot show competition"], correct: 0 },
                { id: "B7", text: "Which phrase best describes the escalation loop?", options: [`"I reduce price because you reduced price"`, `"I save water because rainfall increased"`, `"I study more because marks improved"`, `"I sleep because temperature decreased"`], correct: 0 },
                { id: "B8", text: "Which solution is most aligned with stopping escalation?", options: ["Communication, trust-building, and agreement on fair pricing", "More aggressive price cutting", "Hiding all price information", "Reducing food quality only"], correct: 0 },
                { id: "B9", text: "The fear of losing customers is an important:", options: ["Incentive shaping decision-making", "Outflow from a reservoir", "Stock-flow diagram symbol", "Cloud outside the system only"], correct: 0 },
                { id: "B10", text: "This case teaches that system outcomes depend not only on individual choices but also on:", options: ["Incentives, reactions, and feedback structure", "Only the colour of the stall", "Only one customer's opinion", "Only one isolated price change"], correct: 0 }
            ]
        },
        {
            id: "C",
            title: "From BoT to CLD",
            subtitle: "10 Case-Based MCQs",
            caseParagraph: `A startup launched a new learning app. In the first three months, downloads increased rapidly because early users shared the app with friends. More downloads increased visibility on app stores, which brought even more users. After one year, growth slowed down. Many users complained that the app had bugs, customer support was slow, and new users were not staying for long. The company first celebrated rapid growth but later realized that user retention was falling. Managers decided to first draw BoT graphs for downloads and retention, and then build a CLD to understand why early growth later slowed.`,
            type: "mcq",
            questions: [
                { id: "C1", text: "Rapid increase in app downloads during the first three months would appear in BoT as:", options: ["Steep rising trend", "Stable straight line", "No change pattern", "Dynamic equilibrium only"], correct: 0 },
                { id: "C2", text: "More users sharing the app, leading to more downloads and more visibility, is an example of:", options: ["Reinforcing loop", "Balancing loop only", "Outflow only", "Reality bias"], correct: 0 },
                { id: "C3", text: "Growth slowing after one year suggests that:", options: ["A limiting factor or balancing loop may have become stronger", "Reinforcing growth must continue forever", "Variables stopped existing", "BoT analysis is useless"], correct: 0 },
                { id: "C4", text: "Downloads increasing while retention falling shows:", options: ["Two variables moving in different directions over time", "Perfect dynamic equilibrium", "No need for analysis", "A closed system with no feedback"], correct: 0 },
                { id: "C5", text: "Why should managers draw BoT graphs before CLDs?", options: ["BoT shows the pattern that the CLD can later explain", "BoT automatically fixes bugs", "BoT removes the need for variables", "BoT is only for drawing icons"], correct: 0 },
                { id: "C6", text: "Which is the best CLD variable name?", options: ["Users feeling annoyed and leaving badly", "User retention rate", "App being useless", "People not caring"], correct: 1 },
                { id: "C7", text: `"More bugs → lower user retention" is:`, options: ["O relationship because one increases while the other decreases", "S relationship because both increase", "Dynamic equilibrium", "Source/sink notation"], correct: 0 },
                { id: "C8", text: `"More downloads → more app-store visibility" is:`, options: ["S relationship because both move in the same direction", "O relationship because downloads reduce visibility", "A delay only, with no relationship", "A mental model only"], correct: 0 },
                { id: "C9", text: "Slow customer support may affect retention after some time, not immediately. This is an example of:", options: ["Delay", "Stock", "Paradigm", "Buffer only"], correct: 0 },
                { id: "C10", text: "Which conclusion is most system-oriented?", options: ["Growth slowed because many interacting factors affected retention, quality, and visibility", "One user caused the entire slowdown", "Downloads and retention are the same variable", "The app has no system structure"], correct: 0 }
            ]
        },
        {
            id: "D",
            title: "Stocks, Flows, Buffers, and Delays",
            subtitle: "10 Case-Based MCQs",
            caseParagraph: `A hospital keeps oxygen cylinders for emergencies. During normal days, oxygen supply coming from vendors is enough, and oxygen use by patients is manageable. During a sudden disease outbreak, the number of patients increases sharply. Oxygen use rises faster than oxygen supply. At first, the hospital manages because it has stored oxygen cylinders as a backup. But if the emergency continues and new supply is delayed, the stored oxygen reduces quickly. The hospital later learns that emergency reserves, supply speed, patient demand, and response delays must be planned together.`,
            type: "mcq",
            questions: [
                { id: "D1", text: "Stored oxygen cylinders in the hospital are best understood as:", options: ["A buffer and stock", "A mental model only", "A paradigm shift", "A CLD arrow"], correct: 0 },
                { id: "D2", text: "Oxygen supply coming from vendors is an:", options: ["Inflow into the hospital oxygen stock", "Outflow from patient demand", "Mental model", "Nash equilibrium"], correct: 0 },
                { id: "D3", text: "Oxygen used by patients is an:", options: ["Outflow from the oxygen stock", "Inflow into the oxygen stock", "Information flow only", "Paradigm"], correct: 0 },
                { id: "D4", text: "The hospital manages at first because:", options: ["Stored oxygen acts as a buffer against sudden demand shock", "Delays always increase oxygen stock", "Patient demand is not connected to oxygen use", "Stocks cannot decrease"], correct: 0 },
                { id: "D5", text: "If oxygen use remains greater than oxygen supply, the stored oxygen will:", options: ["Fall over time", "Rise automatically", "Stay perfectly stable", "Become a mental model"], correct: 0 },
                { id: "D6", text: "New oxygen supply arriving late is an example of:", options: ["Delay between need and response", "Dynamic equilibrium", "S relationship only", "Ladder of inference"], correct: 0 },
                { id: "D7", text: "Why is buffer planning important in this case?", options: ["Buffers protect systems during shocks but can run out if flows are not managed", "Buffers remove all future problems permanently", "Buffers are always useless", "Buffers mean the same thing as paradigms"], correct: 0 },
                { id: "D8", text: "If oxygen supply equals oxygen use during the emergency, oxygen stock will:", options: ["Remain stable", "Collapse immediately", "Rise infinitely", "Stop being measurable"], correct: 0 },
                { id: "D9", text: "Which statement best shows stock-flow thinking?", options: ["Oxygen reserve changes depending on supply inflow and patient-use outflow", "Oxygen reserve changes only because doctors feel stressed", "Oxygen reserve is not measurable", "Oxygen use is a mental model only"], correct: 0 },
                { id: "D10", text: "A strong long-term solution would include:", options: ["Increasing emergency reserves, improving supply speed, and monitoring demand", "Ignoring oxygen data", "Reducing information flow", "Removing all backup cylinders"], correct: 0 }
            ]
        },
        {
            id: "E",
            title: "Long Case Study — Fill in the Blanks",
            subtitle: "20 Keyword-Based Questions",
            caseParagraph: `An online learning platform became popular during exam season. At first, more students joined because the platform offered quick revision videos. As more students joined, the platform became more visible on social media, which attracted even more students. However, after a few months, many users stopped using it. Students complained that videos were too rushed, doubts were not answered, and the app crashed during peak hours.\n\nThe company first thought the problem was only technical, so it increased server capacity. This helped for some time, but user dropout continued. Later, managers studied the system more deeply. They found that the platform's real goal had slowly become "increase sign-ups quickly" instead of "improve student learning." Because of this goal, the team focused more on advertisements and less on content quality, doubt-solving, and student feedback.\n\nThe company then used a BoT graph to study user growth and dropout over time. It used a CLD to connect sign-ups, visibility, content quality, student satisfaction, feedback, and dropout rate. It also used stock-flow thinking: total active users were treated as a stock. New sign-ups were inflows, and users leaving the platform were outflows. Managers realized that if outflows remained higher than inflows, active users would decline. To create long-term system change, they improved feedback systems, changed evaluation rules for teachers, invested in doubt-solving, and shifted the goal from "fast growth" to "deep learning and retention."`,
            type: "fib",
            keywords: ["Event", "Pattern", "System Structure", "Mental Model", "BoT Graph", "Variable", "Problem Formulation", "Feedback Loop", "Reinforcing Loop", "Balancing Loop", "Delay", "CLD", "S Relationship", "O Relationship", "Stock", "Flow", "Inflow", "Outflow", "Dynamic Equilibrium", "Leverage Point", "Information Flow", "Rules", "Goals", "Paradigm", "Buffer", "Fixes That Fail", "Long-Term System Change"],
            questions: [
                { id: "E1", text: "The platform becoming popular during exam season is one visible __________ in the system.", answer: "Event", acceptableAnswers: ["event"] },
                { id: "E2", text: "User growth followed by user dropout over several months is a repeated __________ over time.", answer: "Pattern", acceptableAnswers: ["pattern", "patterns"] },
                { id: "E3", text: "A graph showing sign-ups and dropout rate month by month is a __________.", answer: "BoT Graph", acceptableAnswers: ["bot graph", "bot", "behaviour over time graph", "behavior over time graph"] },
                { id: "E4", text: "Sign-ups, active users, dropout rate, content quality, and student satisfaction are __________ because they change over time.", answer: "Variable", acceptableAnswers: ["variable", "variables"] },
                { id: "E5", text: `A statement like "active users declined after dropout exceeded new sign-ups for three months" is an example of clear __________.`, answer: "Problem Formulation", acceptableAnswers: ["problem formulation", "problem statement"] },
                { id: "E6", text: "A diagram connecting sign-ups, visibility, content quality, satisfaction, and dropout with arrows is a __________.", answer: "CLD", acceptableAnswers: ["cld", "causal loop diagram"] },
                { id: "E7", text: `"More social media visibility → more new sign-ups" is an __________ because both move in the same direction.`, answer: "S Relationship", acceptableAnswers: ["s relationship", "s relation", "same direction relationship", "s"] },
                { id: "E8", text: `"Lower content quality → lower student satisfaction" is also an __________ because both variables move down together.`, answer: "S Relationship", acceptableAnswers: ["s relationship", "s relation", "same direction relationship", "s"] },
                { id: "E9", text: `"Higher dropout rate → lower active users" is an __________ because one increases while the other decreases.`, answer: "O Relationship", acceptableAnswers: ["o relationship", "o relation", "opposite direction relationship", "o", "opposite relationship"] },
                { id: "E10", text: "Total active users on the platform can be treated as a __________.", answer: "Stock", acceptableAnswers: ["stock"] },
                { id: "E11", text: "New sign-ups are an __________ into the active user stock.", answer: "Inflow", acceptableAnswers: ["inflow", "inflows"] },
                { id: "E12", text: "Users leaving the platform are an __________ from the active user stock.", answer: "Outflow", acceptableAnswers: ["outflow", "outflows"] },
                { id: "E13", text: "If new sign-ups equal users leaving, active users remain stable; this is __________.", answer: "Dynamic Equilibrium", acceptableAnswers: ["dynamic equilibrium"] },
                { id: "E14", text: "More sign-ups increasing visibility, which brings even more sign-ups, is a __________.", answer: "Reinforcing Loop", acceptableAnswers: ["reinforcing loop", "reinforcing feedback loop", "r loop"] },
                { id: "E15", text: "Improving student feedback helps strengthen __________ because managers can see what students actually need.", answer: "Information Flow", acceptableAnswers: ["information flow", "information flows"] },
                { id: "E16", text: `Changing teacher evaluation from "number of videos uploaded" to "student learning quality" is changing system __________.`, answer: "Rules", acceptableAnswers: ["rules", "rule"] },
                { id: "E17", text: `Shifting focus from "fast sign-ups" to "deep learning and retention" means changing system __________.`, answer: "Goals", acceptableAnswers: ["goals", "goal"] },
                { id: "E18", text: "Increasing only server capacity gave temporary relief but did not solve dropout; this may become __________.", answer: "Fixes That Fail", acceptableAnswers: ["fixes that fail", "fix that fail"] },
                { id: "E19", text: `The belief that "growth means only more sign-ups" is a damaging __________.`, answer: "Mental Model", acceptableAnswers: ["mental model", "mental models"] },
                { id: "E20", text: "Improving content quality, feedback, rules, and goals together can create __________.", answer: "Long-Term System Change", acceptableAnswers: ["long-term system change", "long term system change", "system change"] }
            ]
        }
    ]
};
