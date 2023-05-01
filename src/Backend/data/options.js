module.exports = {
    "options":[
        
        // 1
        // Q1011
        {
            optionID: 10111,
            questionID: 1011,//current question ID
            description: "Be optimistic, state that the new plane design will outperform any competitor in the market, this will lead to good PR and reputation.",
            consequences: {
                contracts:0, //F1
                compContracts:7, // F2
                shares:0,// F3

                publicRep:5, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:0 // P4
            },
            outcomeText: "",
            next: 1021 // id of next question
        },
        {
            optionID: 10112,
            questionID: 1011,//current question ID
            description: "Be neutral, state that the new plane design will match the competitor, this is a weaker statement than ones in the past, and will slightly affect reputation.",
            consequences: {
                contracts:0, //F1
                compContracts:3, // F2
                shares:0,// F3

                publicRep:3, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:0 // P4
            },
            outcomeText: "",
            next: 1021 // id of next question
        },
        {
            optionID: 10113,
            questionID: 1011,//current question ID
            description: "Be pessimistic, state that it is difficult to know how well the plane design will go compared to competitors, this will set public expectations very low, but will greatly affect reputation.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:1, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:0 // P4
            },
            outcomeText: "",
            next: 1021 // id of next question
        },
        // Q1021
        {
            optionID: 10211,
            questionID: 1021,//current question ID
            description: "Commit to reducing plane emissions, this will greatly enhance public reputation since no competitor has done this, but this will lead to a 3 week delay due to having to re-design.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:5, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:8, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "Development continues...",
            next: 1031 // id of next question
        },
        {
            optionID: 10212,
            questionID: 1021,//current question ID
            description: "Commit to match emissions of any competitor, this is the anticipated outcome, but may be inadvertently broken by a new competitor model.",
            consequences: {
                contracts:0, //F1
                compContracts:3, // F2
                shares:0,// F3

                publicRep:3, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "Development continues...",
            next: 1031 // id of next question
        },
        {
            optionID: 10213,
            questionID: 1021,//current question ID
            description: "State that emissions targets are not the focus of the company, this will greatly upset environmental lobbyists, but at the same time takes away any pressure to hit targets, and will put the project 2 weeks ahead of time.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:1, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:3, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "Development continues...",
            next: 1031 // id of next question
        },
        // Q1031
        {
            optionID: 10311,
            questionID: 1031,//current question ID
            description: "Grant these additional funds, this will incur some additional project costs.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:5, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:7 // P4
            },
            outcomeText: "",
            next: 1041 // id of next question
        },
        {
            optionID: 10312,
            questionID: 1031,//current question ID
            description: "Do not grant the funds, the project will continue unhindered.",
            consequences: {
                contracts:0, //F1
                compContracts:3, // F2
                shares:0,// F3

                publicRep:1, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 1041 // id of next question
        },
        // Q1041
        {
            optionID: 10411,
            questionID: 1041,//current question ID
            description: "Grant the 15% raise to both departments, morale within both departments will skyrocket as both departments will feel fairly compensated, but this will incur an extremely large, and possibly crippling, additional cost.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:10, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:3, // P2
                expectedCost:0, // P3
                actualCost:13 // P4
            },
            outcomeText: "",
            next: 1051 // id of next question
        },
        {
            optionID: 10412,
            questionID: 1041,//current question ID
            description: "Grant the 15% raise only to aeronautical, costs will be halved compared to A, but benefits will be exclusive to the aeronautical team.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:5, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:4, // P2
                expectedCost:0, // P3
                actualCost:9 // P4
            },
            outcomeText: "",
            next: 1051 // id of next question
        },
        {
            optionID: 10413,
            questionID: 1041,//current question ID
            description: "Grant the 15% raise only to software, costs will be halved compared to A, but benefits will be exclusive to the software team.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:5, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:4, // P2
                expectedCost:0, // P3
                actualCost:9 // P4
            },
            outcomeText: "",
            next: 1051 // id of next question
        },
        {
            optionID: 10414,
            questionID: 1041,//current question ID
            description: "Grant a 10% raise to both departments, this is less than what was asked for, and more than what the budget allows.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:7, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:3, // P2
                expectedCost:0, // P3
                actualCost:11 // P4
            },
            outcomeText: "",
            next: 1051 // id of next question
        },
        {
            optionID: 10415,
            questionID: 1041,//current question ID
            description: "Grant a 5% raise to both departments, this is what was originally planned.",
            consequences: {
                contracts:0, //F1
                compContracts:4, // F2
                shares:0,// F3

                publicRep:5, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:10,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:8 // P4
            },
            outcomeText: "",
            next: 1051 // id of next question
        },
        {
            optionID: 10416,
            questionID: 1041,//current question ID
            description: "Grant a no raise to both departments, this will cut project costs substantially since a portion of budget is freed up, but this will upset the teams.",
            consequences: {
                contracts:0, //F1
                compContracts:8, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:-20, // R3
                voardRep:5,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:8, // P2
                expectedCost:0, // P3
                actualCost:2 // P4
            },
            outcomeText: "",
            next: 1051 // id of next question
        },
        // Q1051
        {
            optionID: 10511,
            questionID: 1051,//current question ID
            description: "Next.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 6061 // id of next question
        },


        // 2
        // Q2011
        {
            optionID:20111,
            questionID: 2011,//current question ID
            description: "Commit substantial pilot time, pilots will spend equal time giving software feedback as on cockpit and user interface design, this will lead to reduced time spent on cockpit/user interface.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:0 // P4
            },
            outcomeText: "You put lots of efforts in giving feedback.",
            next: 2021 // id of next question
        },
        {
            optionID:20112,
            questionID: 2011,//current question ID
            description: "Commit a little pilot time, pilots will spend a small amount of time giving software feedback, this will consider only the main aspects of the software.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:0 // P4
            },
            outcomeText: "It may be worth to commit more time, but you think there are many things more important than this. So you commit only a little time.",
            next: 2021 // id of next question
        },
        {
            optionID:20113,
            questionID: 2011,//current question ID
            description: "Commit no time, pilots will spend no time giving software feedback, this is what has been done in the past since software expertise lies outside the scope of pilot training, this will lead to increased time spent on cockpit/user interface.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:5, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:0 // P4
            },
            outcomeText: "It would not make any difference whether you provide feedback or more. So you decide not to waste your time on this.",
            next: 2021 // id of next question
        },
        // Q2021
        {
            optionID: 20211,
            questionID: 2021,//current question ID
            description: "Report all issues and concerns, fixes to address both these issues will delay the project by three weeks, one week for the UI, two weeks for the autopilot.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:5, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:4, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "Whether these concerns will be fixed or not, you fulfill your responsibilities.",
            next: 2031 // id of next question
        }, 
        {
            optionID: 20212,
            questionID: 2021,//current question ID
            description: "Report the user interface problems, fixes will delay the project by one week.",
            consequences: {
                contracts:0, //F1
                compContracts:3, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:2, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:6, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "It must be the user interface problems. Not a big deal.",
            next: 2032 // id of next question
        },
        {
            optionID: 20213,
            questionID: 2021,//current question ID
            description: "Report the autopilot mechanism concerns, these may be ignored, but if fixed will delay the project by two weeks.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:3, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:3, // P2
                expectedCost:0, // P3
                actualCost:3 // P4
            },
            outcomeText: "Whether these concerns will be fixed or not, you fulfill your responsibilities.",
            next: 2031 // id of next question
        }, // TODO option 15 Q5
        {
            optionID: 20214,
            questionID: 2021,//current question ID
            description: "Report no issues, the project will continue unhindered.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:1, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg: 5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "You think there is no issue.",
            next: 2032 // id of next question
        },
        // Q2031
        {
            optionID: 20311,
            questionID: 2031,//current question ID
            description: "Ignore the autopilot mechanism issues, since they cause no problems once understood, project continues unhindered save the one week delay.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:1, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:3, // P2
                expectedCost:0, // P3
                actualCost:2 // P4
            },
            outcomeText: "",
            next: 2041 // id of next question
        },
        {
            optionID: 20312,
            questionID: 2031,//current question ID
            description: "Act on the concerns and re-structure the mechanisms, this will delay the project by three weeks total.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:5, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:4, // P2
                expectedCost:0, // P3
                actualCost:2 // P4
            },
            outcomeText: "Major bug fixed.",
            next: 2041 // id of next question
        },
        // Q2032
        {
            optionID: 20321,
            questionID: 2032,//current question ID
            description: "Next.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 2041 // id of next question
        },
        // Q2041
        {
            optionID: 20411,
            questionID: 2041,//current question ID
            description: "Implement a comprehensive version redundancy scheme, this will greatly increase the cost of the project.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:5, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:9 // P4
            },
            outcomeText: "",
            next: 2051 // id of next question
        },
        {
            optionID: 20412,
            questionID: 2041,//current question ID
            description: "Implement a single program redundancy scheme, this will slightly increase the cost of the project, but isn't as thorough a solution.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:3, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:7 // P4
            },
            outcomeText: "",
            next: 2051 // id of next question
        },
        {
            optionID: 20413,
            questionID: 2041,//current question ID
            description: "Do not implement, trust in the reliability of the software team.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:1, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 2051 // id of next question
        },
        // Q2051
        {
            optionID: 20511,
            questionID: 2051,//current question ID
            description: "Next.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 6061 // id of next question
        },


        // 3
        // Q3011
        {
            optionID:30111,
            questionID: 3011,//current question ID
            description: "Commit substantial pilot time, pilots will spend equal time giving software feedback as on cockpit and user interface design, this will lead to reduced time spent on cockpit/user interface.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:5, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:0 // P4
            },
            outcomeText: "You put lots of efforts in giving feedback.",
            next: 3021 // id of next question
        },
        {
            optionID: 30112,
            questionID: 3011,//current question ID
            description: "Commit a little pilot time, pilots will spend a small amount of time giving software feedback, this will consider only the main aspects of the software.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:0 // P4
            },
            outcomeText: "It may be worth to commit more time, but you think there are many things more important than this. So you commit only a little time.",
            next: 3021 // id of next question
        },
        {
            optionID: 30113,
            questionID: 3011,//current question ID
            description: "Commit no time, pilots will spend no time giving software feedback, this is what has been done in the past since software expertise lies outside the scope of pilot training, this will lead to increased time spent on cockpit/user interface.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:0 // P4
            },
            outcomeText: "It would not make any difference whether you provide feedback or more. So you decide not to waste your time on this.",
            next: 3021 // id of next question
        },
        // Q3021
        {
            optionID: 30211,
            questionID: 3021,//current question ID
            description: "Let the software team know about the issue, this will initiate a full group discussion about what to do next.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:2, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:2, // P2
                expectedCost:0, // P3
                actualCost:2 // P4
            },
            outcomeText: "",
            next: 3031 // id of next question
        },
        {
            optionID: 30212,
            questionID: 3021,//current question ID
            description: "Ignore the issue, the others will not be informed of the issue.",
            consequences: {
                contracts:0, //F1
                compContracts:10, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:5, // P3
                actualCost:0 // P4
            },
            outcomeText: "",
            next: 3032 // id of next question
        },
        {
            optionID: 30213,
            questionID: 3021,//current question ID
            description: "Send information about the issue to the analytics department, to assess the probability of the auto-pilot issue leading to an actual problem, this will also not inform the others but will incur extra company costs.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:2, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:2, // P2
                expectedCost:0, // P3
                actualCost:2 // P4
            },
            outcomeText: "",
            next: 3033 // id of next question
        },
        // 3031
        {
            optionID: 30311,
            questionID: 3031,//current question ID
            description: "Next.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 3041 // id of next question
        },
        // 3032
        {
            optionID: 30321,
            questionID: 3032,//current question ID
            description: "Next.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 3042 // id of next question
        },
        // Q3033
        {
            optionID: 30331,
            questionID: 3033,//current question ID
            description: "Ignore the issue, the project will continue unhindered.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:3, // P2
                expectedCost:0, // P3
                actualCost:3 // P4
            },
            outcomeText: "",
            next: 3042 // id of next question
        },
        {
            optionID: 30332,
            questionID: 3033,//current question ID
            description: "Let the software team known about the issue, this will initiate a full group discussion about what to do next.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:2, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:2, // P2
                expectedCost:0, // P3
                actualCost:2 // P4
            },
            outcomeText: "",
            next: 3041 // id of next question
        },
        // Q3041
        {
            optionID: 30411,
            questionID: 3041,//current question ID
            description: "Ignore the issue, the project will continue unhindered.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:3, // P2
                expectedCost:0, // P3
                actualCost:3 // P4
            },
            outcomeText: "",
            next: 3051// id of next question
        },
        {
            optionID: 30412,
            questionID: 3041,//current question ID
            description: "Commit fully to fixing the auto-pilot malfunction, this will delay the project by two weeks, and incur extra costs.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:5, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:3 // P4
            },
            outcomeText: "Major bug fixed.",
            next: 3051 // id of next question
        },
        {
            optionID: 30413,
            questionID: 3041,//current question ID
            description: "Send the issue to the FAA for a comprehensive risk review, this will not commit the company to fixing the issue, but will incur extra costs.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:5, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:3, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 3051 // id of next question
        },
        // Q3042
        {
            optionID: 30421,
            questionID: 3042,//current question ID
            description: "Next.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 3051 // id of next question
        },
        // Q3051
        {
            optionID: 30511,
            questionID: 3051,//current question ID
            description: "Report the issue, the development team will act on it, causing delays to the project by two months.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:5, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:13, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 6061 // id of next question
        },
        {
            optionID: 30512,
            questionID: 3051,//current question ID
            description: "Do not report the issue.",
            consequences: {
                contracts:0, //F1
                compContracts:10, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 6061 // id of next question
        },


        // 4
        // Q4011
        {
            optionID: 40111,
            questionID: 4011,//current question ID
            description: "Make one inspection at the end of plane development, minimizes costs and shows trust.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:1,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:3, // P2
                expectedCost:0, // P3
                actualCost:3 // P4
            },
            outcomeText: "You inspected the plane once, and found nothing",
            next: 4021 // id of next question
        },
        {
            optionID: 40112,
            questionID: 4011,//current question ID
            description: "Make two inspections, one mid-way through development and one at the end of development, more balanced, and what has been done in the past.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:3,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "You inspected the plane twice, and found nothing.",
            next: 4021 // id of next question
        },
        {
            optionID: 40113,
            questionID: 4011,//current question ID
            description: "Make three inspections, one at the start, one mid-way through, and one at the end of development, more thorough but conveys less trust.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:3, // R2
                internalRep:0, // R3
                voardRep:5,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:6, // P2
                expectedCost:0, // P3
                actualCost:6 // P4
            },
            outcomeText: "Inspecting three times gives the public more confidence about the plane, but makes you very exhausted.",
            next: 4021 // id of next question
        },
         // Q4021
        {
            optionID: 40211,
            questionID: 4021,//current question ID
            description: "Report all issues and concerns, fixes to address both these issues will delay the project by three weeks, one week for the UI, two weeks for the autopilot.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:5,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:8, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "Whether these concerns will be fixed or not, you fulfill your responsibilities.",
            next: 4031 // id of next question
        }, // TODO option13
        {
            optionID: 40212,
            questionID: 4021,//current question ID
            description: "Report the user interface problems, fixes will delay the project by one week.",
            consequences: {
                contracts:0, //F1
                compContracts:3, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:2,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:6, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "It must be the user interface problems. Not a big deal.",
            next: 4031 // id of next question
        },
        {
            optionID: 40213,
            questionID: 4021,//current question ID
            description: "Report the autopilot mechanism concerns, these may be ignored, but if fixed will delay the project by two weeks.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:3,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:7, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "Whether these concerns will be fixed or not, you fulfill your responsibilities.",
            next: 4031 // id of next question
        }, // TODO option 15 Q5
        {
            optionID: 40214,
            questionID: 4021,//current question ID
            description: "Report no issues, the project will continue unhindered.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:1,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg: 5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "You think there is no issue.",
            next: 4031 // id of next question
        },
        // Q4031
        {
            optionID: 40311,
            questionID: 4031,//current question ID
            description: "Fix the issue, and inform the FAA of the change, this will delay the project by two weeks.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:5,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:7, // P2
                expectedCost:0, // P3
                actualCost:7 // P4
            },
            outcomeText: "Major bug fixed.",
            next: 4041 // id of next question
        },
        {
            optionID: 40312,
            questionID: 4031,//current question ID
            description: "Do not fix the issue, and inform the FAA of the change, the project will remain on-time.",
            consequences: {
                contracts:0, //F1
                compContracts:3, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:2,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 4041 // id of next question
        },
        // Q4041
        {
            optionID: 40411,
            questionID: 4041,//current question ID
            description: "Skip the inspection, this will save two weeks worth of time and costs and thus will be very beneficial to the company.",
            consequences: {
                contracts:0, //F1
                compContracts:10, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:3, // P2
                expectedCost:0, // P3
                actualCost:3 // P4
            },
            outcomeText: "",
            next: 4051 // id of next question
        },
        {
            optionID: 40412,
            questionID: 4041,//current question ID
            description: "Perform a shorter one-week inspection, this will cover the 'big picture' of the plane design, but won't go into the same depth as a two-week inspection.",
            consequences: {
                contracts:0, //F1
                compContracts:8, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:2,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:4, // P2
                expectedCost:0, // P3
                actualCost:4 // P4
            },
            outcomeText: "",
            next: 4051 // id of next question
        },
        {
            optionID: 40413,
            questionID: 4041,//current question ID
            description: "Perform the two-week inspection, this is a standard-issue inspection that will consider details, but won't go into thorough cross-testing.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:3,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 4051 // id of next question
        },
        {
            optionID: 40414,
            questionID: 4041,//current question ID
            description: "Perform a four-week inspection, this is a comprehensive inspection that will guarantee the quality of the plane is up to standard, and also consider business but it will delay the project.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:5,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:6, // P2
                expectedCost:0, // P3
                actualCost:6 // P4
            },
            outcomeText: "",
            next: 4052 // id of next question
        },
        // 4051
        {
            optionID: 40511,
            questionID: 4051,//current question ID
            description: "Next.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 6061 // id of next question
        },
        // Q4052
        {
            optionID: 40521,
            questionID: 4052,//current question ID
            description: "Comprehensive test reform, to guarantee that maximum lessons are learnt from the mistakes of the past, but this will delay the project by three weeks, keep in mind that these reforms can also be performed after the project.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:5,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:3, // P2
                expectedCost:0, // P3
                actualCost:3 // P4
            },
            outcomeText: "",
            next: 6061 // id of next question
        },
        {
            optionID: 40522,
            questionID: 4052,//current question ID
            description: "Qualitative test reform, reforms will happen in an informal manner, which will cause no delay but incur some training costs.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:2,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:1, // P2
                expectedCost:0, // P3
                actualCost:1 // P4
            },
            outcomeText: "",
            next: 6061 // id of next question
        },
        {
            optionID: 40523,
            questionID: 4052,//current question ID
            description: "No changes, reform will occur after the project, which will allow the project to proceed as usual, save the bug fixes.",
            consequences: {
                contracts:0, //F1
                compContracts:3, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:0 // P4
            },
            outcomeText: "",
            next: 6061 // id of next question
        },


        // 5
        // Q5011
        {
            optionID: 50111,
            questionID: 5011,//current question ID
            description: "Commit substantial pilot time, pilots will spend equal time giving software feedback as on cockpit and user interface design, this will lead to reduced time spent on cockpit/user interface.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:0 // P4
            },
            outcomeText: "You put lots of efforts in giving feedback.",
            next: 5021 // id of next question
        },
        {
            optionID:50112,
            questionID: 5011,//current question ID
            description: "Commit a little pilot time, pilots will spend a small amount of time giving software feedback, this will consider only the main aspects of the software.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:5, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:0 // P4
            },
            outcomeText: "It may be worth to commit more time, but you think there are many things more important than this. So you commit only a little time.",
            next: 5021 // id of next question
        },
        {
            optionID: 50113,
            questionID: 5011,//current question ID
            description: "Commit no time, pilots will spend no time giving software feedback, this is what has been done in the past since software expertise lies outside the scope of pilot training, this will lead to increased time spent on cockpit/user interface.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:1, // P1
                actualProg:1, // P2
                expectedCost:1, // P3
                actualCost:1 // P4
            },
            outcomeText: "It would not make any difference whether you provide feedback or more. So you decide not to waste your time on this.",
            next: 5021 // id of next question
        },
        // Q5021
        {
            optionID: 50211,
            questionID: 5021,//current question ID
            description: "Report all issues and concerns, fixes to address both these issues will delay the project by three weeks, one week for the UI, two weeks for the autopilot.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:5, // R5

                expectedProg:0, // P1
                actualProg:4, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "Whether these concerns will be fixed or not, you fulfill your responsibilities.",
            next: 5031 // id of next question
        }, // TODO option13
        {
            optionID: 50212,
            questionID: 5021,//current question ID
            description: "Report the user interface problems, fixes will delay the project by one week.",
            consequences: {
                contracts:0, //F1
                compContracts:3, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:2, // R5

                expectedProg:0, // P1
                actualProg:6, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "It must be the user interface problems. Not a big deal.",
            next: 5032 // id of next question
        },
        {
            optionID: 50213,
            questionID: 5021,//current question ID
            description: "Report the autopilot mechanism concerns, these may be ignored, but if fixed will delay the project by two weeks.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:3, // R5

                expectedProg:0, // P1
                actualProg:3, // P2
                expectedCost:0, // P3
                actualCost:3 // P4
            },
            outcomeText: "Whether these concerns will be fixed or not, you fulfill your responsibilities.",
            next: 5031 // id of next question
        }, // TODO option 15 Q5
        {
            optionID: 50214,
            questionID: 5021,//current question ID
            description: "Report no issues, the project will continue unhindered.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:1, // R5

                expectedProg:0, // P1
                actualProg: 5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "You think there is no issue.",
            next: 5032 // id of next question
        },
        // Q5031
        {
            optionID: 50311,
            questionID: 5031,//current question ID
            description: "Ignore the autopilot mechanism issues, since they cause no problems once understood, project continues unhindered save the one week delay.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:1, // R5

                expectedProg:0, // P1
                actualProg:3, // P2
                expectedCost:0, // P3
                actualCost:2 // P4
            },
            outcomeText: "",
            next: 5041 // id of next question
        },
        {
            optionID: 50312,
            questionID: 5031,//current question ID
            description: "Act on the concerns and re-structure the mechanisms, this will delay the project by three weeks total.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:5, // R5

                expectedProg:0, // P1
                actualProg:4, // P2
                expectedCost:0, // P3
                actualCost:2 // P4
            },
            outcomeText: "Major bug fixed.",
            next: 5041 // id of next question
        },
        // Q5032
        {
            optionID: 50321,
            questionID: 5032,//current question ID
            description: "Next.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:0, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 5041 // id of next question
        },
        // Q5041
        {
            optionID: 50411,
            questionID: 5041,//current question ID
            description: "Implement a comprehensive version redundancy scheme, this will greatly increase the cost of the project.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:5, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:9 // P4
            },
            outcomeText: "",
            next: 5051 // id of next question
        },
        {
            optionID: 50412,
            questionID: 5041,//current question ID
            description: "Implement a single program redundancy scheme, this will slightly increase the cost of the project, but isn't as thorough a solution.",
            consequences: {
                contracts:0, //F1
                compContracts:2, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:3, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:7 // P4
            },
            outcomeText: "",
            next: 5051 // id of next question
        },
        {
            optionID: 50413,
            questionID: 5041,//current question ID
            description: "Do not implement, trust in the reliability of the software team.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:1, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 5051 // id of next question
        },
        // Q5051
        {
            optionID: 50511,
            questionID: 5051,//current question ID
            description: "Fix the issue, and inform the FAA of the change, this will delay the project by two weeks.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:5, // R5

                expectedProg:0, // P1
                actualProg:7, // P2
                expectedCost:0, // P3
                actualCost:7 // P4
            },
            outcomeText: "Major bug fixed.",
            next: 6061 // id of next question
        },
        {
            optionID: 50512,
            questionID: 5051,//current question ID
            description: "Do not fix the issue, and inform the FAA of the change, the project will remain on-time.",
            consequences: {
                contracts:0, //F1
                compContracts:3, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:5, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:2, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 6061 // id of next question
        },

    
        // 6
        // 6061
        {
            optionID: 60611,
            questionID: 6061,//current question ID
            description: "Do not implement the re-design, this will save costs and time.",
            consequences: {
                contracts:0, //F1
                compContracts:10, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText: "",
            next: 6071 // id of next question
        },
        {
            optionID: 60612,
            questionID: 6061,//current question ID
            description: "Implement the re-design, this will displease the executive team due to the delay in spite of performance benefits.",
            consequences: {
                contracts:10, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:15, // P2
                expectedCost:0, // P3
                actualCost:15 // P4
            },
            outcomeText: "",
            next: 6071 // id of next question
        },
        // 6071
        {
            optionID: 60711,
            questionID: 6071,//current question ID
            description: "Choose a cheaper, less established, manufacturer, this will cut costs substantially, but this is not a manufacturer used before by the company.",
            consequences: {
                contracts:0, //F1
                compContracts:10, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:1 // P4
            },
            outcomeText: "",
            next: 6081 // id of next question
        },
        {
            optionID: 60712,
            questionID: 6071,//current question ID
            description: "Remain with the same manufacturer as before, minimal risk, and minor loyalty discounts.",
            consequences: {
                contracts:5, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:4 // P4
            },
            outcomeText: "",
            next: 6081 // id of next question
        },
        {
            optionID: 60713,
            questionID: 6071,//current question ID
            description: "Choose a premium manufacturer, quite risky since again not used before, but an extremely good track record and has shown initiative with manufacturing, also more expensive.",
            consequences: {
                contracts:10, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:10, // P2
                expectedCost:0, // P3
                actualCost:10 // P4
            },
            outcomeText: "Your manufacturer has identified a major issue with the auto-pilot mechanisms of the plane through its own testing streams, they will refuse to manufacture the plane until it is fixed to protect their reputation. This will incur extra costs.",
            next: 6081 // id of next question
        },
        // 6081
        {
            optionID: 60811,
            questionID: 6081,//current question ID
            description: "Yes, costs are cut, but reputation of the company will take a hit.",
            consequences: {
                contracts:0, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:2 // P4
            },
            outcomeText:"",
            next: 6091 // id of next question
        },
        {
            optionID:60812,
            questionID: 6081,//current question ID
            description: "No, costs will remain the same, but the company's commitment to quality is noted.",
            consequences: {
                contracts:5, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:5, // R1
                regulatorRep:5, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText:"",
            next: 6091 // id of next question
        },
        // 6091
        {
            optionID: 60911,
            questionID: 6091,//current question ID
            description: "A thorough investigation into the 2% issues, fixes to issues identified here will substantially delay the project and incur big costs, since it involves complete re-design, but will fix any issues no matter how significant or otherwise.",
            consequences: {
                contracts:10, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:13, // P2
                expectedCost:0, // P3
                actualCost:13 // P4
            },
            outcomeText:"",
            next: 6101 // id of next question
        },
        {
            optionID: 60912,
            questionID: 6091,//current question ID
            description: "A brief investigation into the 2% issues, this will consider the issues found here, but will delay the project quite a bit less, since there is no re-design, and should still fix most issues prevalent in the plane.",
            consequences: {
                contracts:5, //F1
                compContracts:4, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:8, // P2
                expectedCost:0, // P3
                actualCost:8 // P4
            },
            outcomeText:"",
            next: 6101 // id of next question
        },
        {
            optionID: 60913,
            questionID: 6091,//current question ID
            description: "Do not pursue any fixes, if the issues are trivial, which experts consider to be likely, this will save substantial time and costs.",
            consequences: {
                contracts:0, //F1
                compContracts:8, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:2, // P2
                expectedCost:0, // P3
                actualCost:2 // P4
            },
            outcomeText:"",
            next: 6101 // id of next question
        },
        // 6101
        {
            optionID: 61011,
            questionID: 6101,//current question ID
            description:"Skip the inspection, this will save two weeks worth of time and costs and thus will be very beneficial to the company.",
            consequences: {
                contracts:0, //F1
                compContracts:10, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:3, // P2
                expectedCost:0, // P3
                actualCost:3 // P4
            },
            outcomeText:"",
            next: 6111 // id of next question
        },
        {
            optionID: 61012,
            questionID: 6101,//current question ID
            description:"Perform a shorter one-week inspection, this will cover the 'big picture' of the plane design, but won't go into the same depth as a two-week inspection.",
            consequences: {
                contracts:3, //F1
                compContracts:7, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:4, // P2
                expectedCost:0, // P3
                actualCost:4 // P4
            },
            outcomeText:"",
            next: 6111 // id of next question
        },
        {
            optionID: 61013,
            questionID: 6101,//current question ID
            description:"Perform the two-week inspection, this is a standard-issue inspection that will consider details, but won't go into thorough cross-testing.",
            consequences: {
                contracts:5, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:5 // P4
            },
            outcomeText:"",
            next: 6111 // id of next question
        },
        {
            optionID: 61014,
            questionID: 6101,//current question ID
            description:"Perform a six-week inspection, this is a comprehensive inspection that will guarantee the quality of the plane is up to standard, and also consider business but it will delay the project by a huge amount.",
            consequences: {
                contracts:10, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:11, // P2
                expectedCost:0, // P3
                actualCost:11 // P4
            },
            outcomeText:"",
            next: 6111 // id of next question
        },
        // 6111
        {
            optionID: 61111,
            questionID: 6111,//current question ID
            description:"Utilize to its full extent, this method involves some bribery and under-the-table dealings to develop a competitive advantage over rivals, but will greatly affect the company's reputation since word will get out.",
            consequences: {
                contracts:10, //F1
                compContracts:10, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:7 // P4
            },
            outcomeText:"",
            next: 6121 // id of next question
        },
        {
            optionID: 61112,
            questionID: 6111,//current question ID
            description:"Utilize to a legal extent, this is an aggressive method that is similar to A, but does not enter illegal territory, but because of this will be far less effective, yet still useful.",
            consequences: {
                contracts:5, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:7 // P4
            },
            outcomeText:"",
            next: 6121 // id of next question
        },
        {
            optionID: 61113,
            questionID: 6111,//current question ID
            description:"Utilize to a reasonable extent, this is a standard method where competitiors and the public will see as 'fair', still incurs costs, but can be eclipsed by competitors methods if they decide to be aggressive.",
            consequences: {
                contracts:3, //F1
                compContracts:3, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:6 // P4
            },
            outcomeText:"",
            next: 6121 // id of next question
        },
        {
            optionID: 61114,
            questionID: 6111,//current question ID
            description: "Do not utilize, this will save two weeks of costs, and will be great for reputation, but will hinder the competitive effort.",
            consequences: {
                contracts:0, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:3 // P4
            },
            outcomeText:"",
            next: 6121 // id of next question
        },
        // 6121
        {
            optionID:61211,
            questionID: 6121,//current question ID
            description: "Yes, this will incur costs, but will almost certainly lead to a competitive victory.",
            consequences: {
                contracts:10, //F1
                compContracts:0, // F2
                shares:20,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:8 // P4
            },
            outcomeText: "",
            next: 6131 // id of next question
        },
        {
            optionID: 61212,
            questionID: 6121,//current question ID
            description: "No, this will upset the executive board and reduce competitive advantage, but will save some costs.",
            consequences: {
                contracts:0, //F1
                compContracts:10, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:5, // P2
                expectedCost:0, // P3
                actualCost:2 // P4
            },
            outcomeText: "",
            next: 6131 // id of next question
        },
        // 6131
        {
            optionID: 61311,
            questionID: 6131,//current question ID
            description: "Commit to a full investigation into the issue, this is considered by most experts to be a waste since the pilots appear to be the cause of the crash, this will incur substantial, possibly crippling, costs, but will please the FAA.",
            consequences: {
                contracts:10, //F1
                compContracts:0, // F2
                shares:0,// F3

                publicRep:-15, // R1
                regulatorRep:10, // R2
                internalRep:-10, // R3
                voardRep:-10,// R4, CEO only
                enviroRep:-10, // R5

                expectedProg:0, // P1
                actualProg:20, // P2
                expectedCost:0, // P3
                actualCost:25 // P4
            },
            outcomeText: "",
            next: -1 // id of next question
        },
        {
            optionID: 61312,
            questionID: 6131,//current question ID
            description: "Perform a standard investigation into the issue, this is expected by the FAA, and will help identify any fundamental issue with the plane, without leading to large cost overheads.",
            consequences: {
                contracts:5, //F1
                compContracts:5, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:15, // P2
                expectedCost:0, // P3
                actualCost:18 // P4
            },
            outcomeText: "",
            next: -1 // id of next question
        },
        {
            optionID: 61313,
            questionID: 6131,//current question ID
            description: "Perform no investigation, relying on the comprehensive investigations performed by others, this leads to no costs, and operations will continue, in fact, this will prevent loss of contracts as clients will be more confident.",
            consequences: {
                contracts:2, //F1
                compContracts:10, // F2
                shares:0,// F3

                publicRep:0, // R1
                regulatorRep:0, // R2
                internalRep:0, // R3
                voardRep:0,// R4, CEO only
                enviroRep:0, // R5

                expectedProg:0, // P1
                actualProg:10, // P2
                expectedCost:0, // P3
                actualCost:10 // P4
            },
            outcomeText: "",
            next: -1 // id of next question
        }
    ]
};