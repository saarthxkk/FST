// ============================================
// SET 4 QUESTIONS DATA
// ============================================
const quizDataSet4 = {
    sections: [
        {
            id: "A", title: "Behaviour Over Time, Variables & Problem Formulation", subtitle: "10 Case-Based MCQs",
            caseParagraph: `A coaching institute noticed that students' mock test scores were not improving smoothly. In the first month, average scores increased from 42% to 55% because students were excited and attended classes regularly. In the second month, scores became stable around 56%. In the third month, scores dropped to 48% because students started skipping revision and relying only on recorded lectures. Near the final test, scores increased again after extra practice sessions. The institute first blamed students for inconsistency, but later decided to plot mock test scores, attendance, revision hours, and practice questions over time to understand the pattern clearly.`,
            type: "mcq",
            questions: [
                { id:"A1", text:"Why is a Behaviour Over Time graph useful in this case?", options:["It helps show how mock test scores changed across months instead of focusing on one test only","It directly tells which student should be punished","It removes the need for variables","It only shows classroom furniture arrangement"], correct:0 },
                { id:"A2", text:"Mock test score, attendance, revision hours, and practice questions are called variables because:", options:["They can change over time and can be measured","They are fixed beliefs that never change","They are only physical objects","They are outside the system boundary always"], correct:0 },
                { id:"A3", text:"The score increasing first, then stabilizing, then falling, and again improving suggests:", options:["A changing pattern over time, not a single event","Perfectly constant behaviour","No relationship with time","A closed system with no feedback"], correct:0 },
                { id:"A4", text:"If the institute studies only the final test score and ignores earlier months, what mistake is it making?", options:["It is using too short a time horizon and missing the larger pattern","It is correctly identifying all system structure","It is creating a complete CLD","It is measuring inflow and outflow perfectly"], correct:0 },
                { id:"A5", text:"Which of the following is the best variable name for the BoT graph?", options:["Students becoming careless","Average mock test score","Students not taking things seriously","Poor coaching discipline"], correct:1 },
                { id:"A6", text:`The statement "average mock test scores dropped from 56% to 48% in the third month after revision hours reduced" is strong because it includes:`, options:["Variable, change, measurement, and time period","Only blame and opinion","Only one mental model","No measurable detail"], correct:0 },
                { id:"A7", text:"If scores remain around 56% for several tests, that part of the BoT pattern is closest to:", options:["Stable or leveling pattern","Exponential collapse","One-time event only","Tragedy of commons"], correct:0 },
                { id:"A8", text:"Scores improving after extra practice sessions can be marked on the BoT graph as:", options:["A significant intervention or turning point","A stock-flow cloud","A paradigm only","A closed system boundary"], correct:0 },
                { id:"A9", text:"Which problem statement is most systems-oriented?", options:["Students are lazy.","Scores are bad.","Average mock scores rose, then stagnated, then declined when revision hours reduced over three months.","Teachers are responsible for everything."], correct:2 },
                { id:"A10", text:"BoT analysis mainly helps the institute ask:", options:["What pattern is happening over time, and what may be driving it?","Which student should be blamed immediately?","How can we avoid collecting data?","Why should time be ignored?"], correct:0 }
            ]
        },
        {
            id: "B", title: "Causal Loop Diagrams, S/O Links & Delays", subtitle: "10 Case-Based MCQs",
            caseParagraph: `A student preparing for coding interviews notices a cycle in his preparation. When he solves more problems, his confidence increases. Higher confidence makes him practice more consistently. More practice improves his problem-solving skill. However, when he faces too many difficult questions at once, frustration increases. More frustration reduces motivation, and reduced motivation decreases practice time. Sometimes, even after practicing for a week, improvement is not visible immediately, so he feels doubtful and stops practicing. His mentor suggests drawing a CLD to understand how practice, confidence, skill, frustration, motivation, and delay are connected.`,
            type: "mcq",
            questions: [
                { id:"B1", text:"Why is a CLD suitable for this case?", options:["It can show how practice, confidence, skill, frustration, and motivation influence each other","It only shows marks on a time axis","It replaces all variables with one number","It is used only for physical water systems"], correct:0 },
                { id:"B2", text:`"More practice → higher problem-solving skill" should be marked as:`, options:["S relationship because both move in the same direction","O relationship because one increases and one decreases","B loop because every arrow is balancing","Outflow because skill leaves the system"], correct:0 },
                { id:"B3", text:`"More frustration → lower motivation" should be marked as:`, options:["S relationship","O relationship","Dynamic equilibrium","Stock only"], correct:1 },
                { id:"B4", text:`The loop "more practice → more confidence → more consistent practice" is mainly:`, options:["Reinforcing because it amplifies improvement","Balancing because it always reduces practice","A delay with no feedback","A system boundary"], correct:0 },
                { id:"B5", text:`The loop "more difficult questions → more frustration → less motivation → less practice" may become harmful because:`, options:["It can reinforce decline in preparation","It creates perfect stability immediately","It has no cause-effect links","It makes variables unmeasurable"], correct:0 },
                { id:"B6", text:"Improvement not appearing immediately after practice is an example of:", options:["Delay between effort and visible result","Same direction relationship only","No system behaviour","A source and sink"], correct:0 },
                { id:"B7", text:"If the student quits because results are delayed, what systems mistake is he making?", options:["He is misreading delay as failure of the intervention","He is correctly identifying dynamic equilibrium","He is strengthening information flow","He is removing all feedback loops"], correct:0 },
                { id:"B8", text:"Which is the best CLD variable name?", options:["Getting irritated by hard questions","Frustration level","Student being weak","Not able to solve anything"], correct:1 },
                { id:"B9", text:"If mentor support increases motivation and motivation increases practice, both links are likely:", options:["S relationships","O relationships","Outflows","Paradigms"], correct:0 },
                { id:"B10", text:"The main advantage of drawing this CLD is that it helps the student:", options:["See how emotional and study variables create feedback patterns","Blame one difficult question for all failure","Avoid practice completely","Treat confidence as a physical stock only"], correct:0 }
            ]
        },
        {
            id: "C", title: "System Archetypes — Fixes That Fail, Drifting Goals & Shifting the Burden", subtitle: "10 Case-Based MCQs",
            caseParagraph: `A student regularly feels tired during classes because he sleeps late at night. To manage sleepiness, he drinks extra coffee every morning. Coffee helps him stay awake temporarily, but at night he feels more alert and again sleeps late. Over time, his natural energy decreases, and he needs more coffee to function. His grades also start falling, but instead of fixing his sleep routine, he lowers his expectations and says, "Passing is enough now." His friend suggests that the real solution is not more coffee but changing his sleep schedule, screen time, and study routine.`,
            type: "mcq",
            questions: [
                { id:"C1", text:"Drinking coffee to handle tiredness gives temporary relief but worsens the sleep problem later. This is closest to:", options:["Fixes That Fail","Dynamic Equilibrium","Success to the Successful","Open System only"], correct:0 },
                { id:"C2", text:"Coffee is a symptomatic solution because:", options:["It reduces sleepiness temporarily but does not fix the root sleep routine","It permanently solves the deeper structure","It changes the student's paradigm immediately","It removes all delays from the system"], correct:0 },
                { id:"C3", text:"Changing sleep schedule, screen time, and study routine would be a:", options:["Fundamental solution","Temporary symptom fix only","Stock-flow cloud","Nash equilibrium"], correct:0 },
                { id:"C4", text:"The student needing more coffee over time shows:", options:["Dependency on the quick fix","Dynamic equilibrium","A closed system with no feedback","No pattern"], correct:0 },
                { id:"C5", text:`Saying "Passing is enough now" after grades fall is an example of:`, options:["Drifting Goals","Tragedy of the Commons","Escalation","Information flow"], correct:0 },
                { id:"C6", text:"Drifting Goals is dangerous because:", options:["Standards fall instead of the system improving","Performance always improves automatically","It creates perfect balance","It has no relation to expectations"], correct:0 },
                { id:"C7", text:"The coffee habit may also represent Shifting the Burden because:", options:["The student depends on a temporary solution instead of solving the root cause","The student changes the education paradigm","The student reaches dynamic equilibrium","The student improves sleep naturally"], correct:0 },
                { id:"C8", text:"Which intervention is most systems-oriented?", options:["Reduce late-night screen time, improve sleep routine, and plan study earlier","Drink more coffee every week","Lower academic expectations further","Ignore tiredness until exams"], correct:0 },
                { id:"C9", text:`The belief "I can manage tiredness with coffee instead of sleep" is a:`, options:["Mental model supporting the problem","Physical stock of water","Material flow only","System boundary"], correct:0 },
                { id:"C10", text:"The main lesson from this case is:", options:["Quick fixes can reduce symptoms while making the deeper problem stronger","Symptoms and root causes are always the same","Lowering standards is always the best solution","Coffee has no effect on behaviour"], correct:0 }
            ]
        },
        {
            id: "D", title: "Mental Models, Ladder of Inference & Biases", subtitle: "10 Case-Based MCQs",
            caseParagraph: `A teacher noticed that one student did not ask questions in class. The teacher assumed that the student was not interested. Later, the teacher also noticed that the student submitted one assignment late, which confirmed the teacher's belief that the student was careless. However, when the teacher spoke to the student, she learned that the student was shy, afraid of being judged, and had been struggling with weak basics. The student actually wanted to learn but did not know how to ask doubts. The teacher realized that her earlier conclusion was based on limited observations and assumptions.`,
            type: "mcq",
            questions: [
                { id:"D1", text:`The teacher's belief that "the student is not interested" is an example of:`, options:["Mental model","Inflow","Buffer","Dynamic equilibrium"], correct:0 },
                { id:"D2", text:"The teacher observed silence and selected only that information to form a judgment. This is part of:", options:["Ladder of Inference","Stock-flow diagram","Physical material flow","Open system boundary only"], correct:0 },
                { id:"D3", text:"Which sequence best represents the Ladder of Inference in this case?", options:["Observe silence → interpret as disinterest → assume carelessness → act differently toward student","Stock → inflow → outflow → source","BoT → CLD → SFD → Vensim","Parameter → buffer → goal → paradigm"], correct:0 },
                { id:"D4", text:"The late assignment confirming the teacher's existing belief is an example of:", options:["Confirmation bias","Dynamic equilibrium","Material flow","Tragedy of Commons"], correct:0 },
                { id:"D5", text:"Why was the teacher's initial mental model incomplete?", options:["It ignored other explanations like shyness, fear of judgment, and weak basics","It included every possible perspective","It was based on full system data","It was a perfect model of reality"], correct:0 },
                { id:"D6", text:`Mistaking "my interpretation is the truth" would be called:`, options:["Reality bias","Inflow","Buffering","System boundary"], correct:0 },
                { id:"D7", text:"Speaking directly with the student helped the teacher because it:", options:["Added feedback and updated the teacher's mental model","Removed all variables from the system","Made silence a physical stock","Proved that assumptions are always correct"], correct:0 },
                { id:"D8", text:"Which is the best systems thinking response from the teacher?", options:["Ask what structures or beliefs stop students from asking doubts","Punish all quiet students","Assume silence always means laziness","Ignore student perspective"], correct:0 },
                { id:"D9", text:"The student and teacher saw the same classroom behaviour differently because they had:", options:["Different mental models","Same exact assumptions","No system interaction","Only physical flows"], correct:0 },
                { id:"D10", text:"The main lesson from this case is:", options:["We should test assumptions before acting on them","First impressions are always complete truth","Mental models never change","Feedback cannot improve understanding"], correct:0 }
            ]
        },
        {
            id: "E", title: "Long Case Study — Fill in the Blanks", subtitle: "20 Keyword-Based Questions",
            caseParagraph: `A university hostel noticed that a large amount of food was wasted every night. On some days, the mess staff cooked extra food because they feared students might complain about shortage. Students also took more food than they could eat because there was no visible feedback about daily waste. Many students believed, "I have already paid for mess food, so wasting a little does not matter." The mess committee first responded by putting up warning posters. For a few days, waste reduced slightly, but soon the old pattern returned.\n\nAfter studying the issue, the committee realized that food waste was not just an individual discipline problem. It was a system involving student habits, plate size, serving style, menu quality, attendance in mess, cooking estimates, feedback systems, and beliefs about responsibility. The committee decided to collect daily waste data and show it publicly. They changed serving rules by encouraging smaller first servings and allowing second servings. They improved menu feedback and adjusted cooking quantity based on actual attendance. Over time, food waste started reducing.`,
            type: "fib",
            keywords: ["Systems Thinking","Event","Pattern","System Structure","Mental Model","Variable","BoT Graph","Problem Formulation","Feedback Loop","Reinforcing Loop","Balancing Loop","Delay","CLD","S Relationship","O Relationship","Stock","Flow","Inflow","Outflow","Dynamic Equilibrium","Information Flow","Rules","Goals","Leverage Point","Buffer","Fixes That Fail","Long-Term System Change"],
            questions: [
                { id:"E1", text:"One night of high food waste is an __________.", answer:"Event", acceptableAnswers:["event"] },
                { id:"E2", text:"Food waste happening repeatedly every night is a __________.", answer:"Pattern", acceptableAnswers:["pattern","patterns"] },
                { id:"E3", text:"Studying food waste by connecting student habits, serving style, menu quality, cooking estimates, and beliefs is called __________.", answer:"Systems Thinking", acceptableAnswers:["systems thinking"] },
                { id:"E4", text:"Daily food waste amount, mess attendance, plate size, and cooking quantity are __________ because they can change over time.", answer:"Variable", acceptableAnswers:["variable","variables"] },
                { id:"E5", text:"A graph showing food waste quantity across one semester is a __________.", answer:"BoT Graph", acceptableAnswers:["bot graph","bot","behaviour over time graph","behavior over time graph"] },
                { id:"E6", text:`The statement "food waste remained high every night for three months despite warning posters" is an example of clear __________.`, answer:"Problem Formulation", acceptableAnswers:["problem formulation","problem statement"] },
                { id:"E7", text:"Plate size, serving rules, cooking estimates, and feedback systems together form the deeper __________ behind waste.", answer:"System Structure", acceptableAnswers:["system structure","structure"] },
                { id:"E8", text:`The belief "I have paid for food, so wasting a little does not matter" is a __________.`, answer:"Mental Model", acceptableAnswers:["mental model","mental models"] },
                { id:"E9", text:"Publicly showing daily food waste improves __________ because students can see the system impact clearly.", answer:"Information Flow", acceptableAnswers:["information flow","information flows"] },
                { id:"E10", text:"Encouraging smaller first servings and allowing second servings is a change in system __________.", answer:"Rules", acceptableAnswers:["rules","rule"] },
                { id:"E11", text:"Warning posters reducing waste for a few days but not solving the repeated problem may become __________.", answer:"Fixes That Fail", acceptableAnswers:["fixes that fail","fix that fail"] },
                { id:"E12", text:"A diagram connecting cooking quantity, mess attendance, serving size, satisfaction, and waste using arrows is a __________.", answer:"CLD", acceptableAnswers:["cld","causal loop diagram"] },
                { id:"E13", text:`"More food cooked → more leftover food" is an __________ because both variables increase together.`, answer:"S Relationship", acceptableAnswers:["s relationship","s relation","s"] },
                { id:"E14", text:`"Better menu satisfaction → lower food waste" is an __________ because one increases while the other decreases.`, answer:"O Relationship", acceptableAnswers:["o relationship","o relation","o"] },
                { id:"E15", text:"Cooked food available in the mess at dinner time can be treated as a __________.", answer:"Stock", acceptableAnswers:["stock"] },
                { id:"E16", text:"Food prepared by mess staff is an __________ into the cooked food stock.", answer:"Inflow", acceptableAnswers:["inflow","inflows"] },
                { id:"E17", text:"Food eaten by students is an __________ from the cooked food stock.", answer:"Outflow", acceptableAnswers:["outflow","outflows"] },
                { id:"E18", text:"If food prepared equals food eaten, the system reaches __________ with no major leftover.", answer:"Dynamic Equilibrium", acceptableAnswers:["dynamic equilibrium"] },
                { id:"E19", text:"Public waste display, better serving rules, and menu feedback are __________ because they are smart places to intervene.", answer:"Leverage Point", acceptableAnswers:["leverage point","leverage points"] },
                { id:"E20", text:"Reducing food waste sustainably by changing data visibility, rules, habits, and beliefs is __________.", answer:"Long-Term System Change", acceptableAnswers:["long-term system change","long term system change","system change"] }
            ]
        }
    ]
};
