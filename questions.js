// Question Bank for SAP CPI Quiz
// Structure: sections[sectionNumber][questionCount] = array of questions

const quizData = {
    // Section 1: Integration Basics
    1: {
        30: [
            {
                question: "What does CPI stand for in SAP CPI?",
                options: [
                    "Cloud Platform Integration",
                    "Central Process Integration",
                    "Cloud Processing Interface",
                    "Central Platform Interface"
                ],
                correct: 0,
                explanation: "CPI stands for Cloud Platform Integration. It's part of SAP's integration platform as a service (iPaaS) offering for connecting cloud and on-premise applications.",
                difficulty: "easy"
            },
            {
                question: "Which of the following is NOT a standard integration flow component in SAP CPI?",
                options: [
                    "Start Event",
                    "Content Modifier",
                    "Database Connector",
                    "End Event"
                ],
                correct: 2,
                explanation: "Database Connector is not a standard component. SAP CPI uses JDBC adapters for database connectivity, not a generic 'Database Connector' component.",
                difficulty: "medium"
            },
            {
                question: "In SAP CPI, what is the primary purpose of the Content Modifier?",
                options: [
                    "To encrypt message content",
                    "To modify message headers, properties, and body",
                    "To validate XML schemas",
                    "To compress data"
                ],
                correct: 1,
                explanation: "The Content Modifier is used to set or modify message headers, exchange properties, and message body during integration flow processing.",
                difficulty: "easy"
            },
            {
                question: "Your integration flow receives orders from multiple systems but processes them at different speeds. Orders from System A take 5 seconds each, while orders from System B take 2 seconds. If you receive 10 orders from each system simultaneously, what processing pattern should you implement?",
                options: [
                    "Single sequential processor",
                    "Parallel processing with separate pools for each system",
                    "FIFO queue with priority",
                    "Round-robin distribution"
                ],
                correct: 1,
                explanation: "Parallel processing with separate pools allows each system's orders to be processed independently without one system's slower processing blocking the other. This optimizes throughput and prevents head-of-line blocking.",
                difficulty: "hard"
            },
            {
                question: "What is the maximum retention period for message processing logs in SAP CPI?",
                options: [
                    "7 days",
                    "30 days",
                    "60 days",
                    "90 days"
                ],
                correct: 1,
                explanation: "The default retention period for message processing logs (MPL) in SAP CPI is 30 days. After this period, logs are automatically deleted.",
                difficulty: "medium"
            },
            {
                question: "Which Camel component is used to split a message into multiple messages?",
                options: [
                    "Aggregator",
                    "Splitter",
                    "Content Enricher",
                    "Router"
                ],
                correct: 1,
                explanation: "The Splitter component splits a single message containing multiple items into individual messages for each item, enabling parallel or sequential processing.",
                difficulty: "easy"
            },
            {
                question: "In SAP CPI, what does the 'Externalize Parameters' feature allow you to do?",
                options: [
                    "Export integration flows to external systems",
                    "Define configurable parameters that can be changed without modifying the iFlow",
                    "Store parameters in external databases",
                    "Share parameters across different tenants"
                ],
                correct: 1,
                explanation: "Externalize Parameters allows you to define configurable values that can be changed during deployment without modifying the integration flow design, improving flexibility and reusability.",
                difficulty: "medium"
            },
            {
                question: "You're designing an integration where System A sends 1000 records in a single file, but System B can only accept 50 records per API call. The process must maintain order and handle failures gracefully. Which design pattern is most appropriate?",
                options: [
                    "Simple splitter with parallel processing",
                    "Splitter with sequential processing and persistence",
                    "Content modifier with batch processing",
                    "Router with conditional batching"
                ],
                correct: 1,
                explanation: "Splitter with sequential processing ensures order is maintained, while persistence (like Data Store) allows you to track progress and handle failures by reprocessing only failed batches without starting over.",
                difficulty: "hard"
            },
            {
                question: "What is the purpose of the 'Process Direct' adapter in SAP CPI?",
                options: [
                    "Direct database connections",
                    "Synchronous communication between integration flows within the same tenant",
                    "Direct FTP connections",
                    "Process automation"
                ],
                correct: 1,
                explanation: "Process Direct adapter enables synchronous, in-memory communication between integration flows in the same tenant, avoiding the overhead of external protocols.",
                difficulty: "medium"
            },
            {
                question: "Which expression language is primarily used in SAP CPI for dynamic content evaluation?",
                options: [
                    "JavaScript",
                    "XPath",
                    "Simple Expression Language",
                    "Groovy"
                ],
                correct: 2,
                explanation: "Simple Expression Language (based on Apache Camel's Simple language) is the primary expression language for accessing headers, properties, and body content dynamically in SAP CPI.",
                difficulty: "easy"
            },
            {
                question: "What happens to messages in an integration flow if an exception occurs and no exception handling is configured?",
                options: [
                    "Message is automatically retried 3 times",
                    "Message fails and is logged with status 'Failed'",
                    "Message is sent to a default error queue",
                    "Processing continues to the next message"
                ],
                correct: 1,
                explanation: "Without exception handling, messages that encounter errors will fail immediately, and the integration flow execution stops for that message with a 'Failed' status in the monitoring.",
                difficulty: "medium"
            },
            {
                question: "In SAP CPI, what is an 'Integration Package'?",
                options: [
                    "A compressed file format for backups",
                    "A container that groups related integration artifacts like iFlows, value mappings, and scripts",
                    "A pricing tier for SAP CPI",
                    "A deployment unit for APIs"
                ],
                correct: 1,
                explanation: "An Integration Package is a logical container that groups related integration artifacts together, making it easier to organize, manage, and transport integration content.",
                difficulty: "easy"
            },
            {
                question: "Your integration needs to process JSON messages but also support XML for legacy systems. The routing logic is identical for both formats. You want to minimize code duplication and maintenance. What's the best approach?",
                options: [
                    "Create separate integration flows for JSON and XML",
                    "Use a converter at the start to normalize to one format, then process uniformly",
                    "Use groovy scripts to handle both formats conditionally throughout",
                    "Create two versions and maintain them separately"
                ],
                correct: 1,
                explanation: "Converting to a single format at the entry point (normalization) allows you to write the business logic once, reducing code duplication, maintenance effort, and potential inconsistencies.",
                difficulty: "medium"
            },
            {
                question: "What is the primary difference between the 'Request Reply' and 'Send' communication patterns?",
                options: [
                    "Request Reply is faster",
                    "Send is synchronous, Request Reply is asynchronous",
                    "Request Reply expects a response, Send does not",
                    "They are the same"
                ],
                correct: 2,
                explanation: "Request Reply is used for synchronous communication where a response is expected from the receiver, while Send is for fire-and-forget asynchronous communication.",
                difficulty: "easy"
            },
            {
                question: "Which component would you use to combine multiple messages into a single message?",
                options: [
                    "Splitter",
                    "Content Enricher",
                    "Aggregator",
                    "Multicast"
                ],
                correct: 2,
                explanation: "The Aggregator component combines multiple related messages into a single message based on a correlation expression, opposite of what a Splitter does.",
                difficulty: "easy"
            },
            {
                question: "In SAP CPI, message headers are:",
                options: [
                    "Permanent and persist across all flows",
                    "Temporary and exist only within a single integration flow execution",
                    "Stored in the database automatically",
                    "Only accessible via Groovy scripts"
                ],
                correct: 1,
                explanation: "Message headers are temporary metadata that exist only during a single message processing instance. They don't persist beyond the integration flow execution.",
                difficulty: "medium"
            },
            {
                question: "You have three systems: A sends data, B validates it, and C stores it. System B occasionally times out (30% of calls). Failed validations should be retried up to 3 times with 5-minute delays, but successful validations must be stored exactly once. What pattern ensures this?",
                options: [
                    "Exception handler with automatic retry and idempotent receiver for C",
                    "Simple retry logic for B and duplicate processing for C",
                    "Aggregator with persistence and manual retry",
                    "Sequential processing with no exception handling"
                ],
                correct: 0,
                explanation: "Exception handler with retry handles B's timeouts, while an idempotent receiver pattern for C (using message ID tracking) ensures data is stored exactly once even if retries cause duplicate sends.",
                difficulty: "hard"
            },
            {
                question: "What is the purpose of the 'Router' component in an integration flow?",
                options: [
                    "To encrypt messages",
                    "To conditionally route messages to different paths based on content or headers",
                    "To load balance across multiple endpoints",
                    "To convert message formats"
                ],
                correct: 1,
                explanation: "The Router (Content-Based Router) evaluates conditions and directs messages to different processing paths based on message content, headers, or properties.",
                difficulty: "easy"
            },
            {
                question: "In SAP CPI, what is the 'Tenant Management' node used for?",
                options: [
                    "Managing user access and permissions",
                    "Monitoring message processing",
                    "Deploying integration flows",
                    "Managing tenant-level configurations, security materials, and deployed artifacts"
                ],
                correct: 3,
                explanation: "Tenant Management node provides access to tenant-level operations including security material management, deployed artifacts, system connections, and monitoring capabilities.",
                difficulty: "medium"
            },
            {
                question: "Which of the following is TRUE about SAP CPI's multitenancy?",
                options: [
                    "Each customer shares the same integration flows",
                    "Each tenant has isolated integration content and configurations",
                    "All tenants share the same security credentials",
                    "Tenants can directly access each other's data"
                ],
                correct: 1,
                explanation: "SAP CPI is a multi-tenant platform where each tenant has completely isolated integration content, configurations, and security materials, ensuring data privacy and security.",
                difficulty: "medium"
            },
            {
                question: "What does 'End Message' event do in an integration flow?",
                options: [
                    "Throws an error",
                    "Successfully terminates the message processing",
                    "Sends message to a queue",
                    "Restarts the flow"
                ],
                correct: 1,
                explanation: "End Message event successfully terminates the message processing for that particular route. It's often used after conditional routing when certain messages don't need further processing.",
                difficulty: "easy"
            },
            {
                question: "You're integrating with an external API that has a rate limit of 100 calls per minute. Your system generates 500 messages per minute. The messages are not time-sensitive but must all be processed eventually. What's the optimal approach?",
                options: [
                    "Send all 500 and accept failures",
                    "Use a queue with controlled polling at 100 messages per minute",
                    "Batch 500 messages into 100 and send once",
                    "Process synchronously with delays"
                ],
                correct: 1,
                explanation: "A queue-based approach with controlled polling (using scheduler or JMS with throttling) allows you to respect the rate limit while ensuring all messages are eventually processed without loss.",
                difficulty: "hard"
            },
            {
                question: "What is the primary purpose of the 'Exchange Property' in SAP CPI?",
                options: [
                    "To store data that persists across an entire integration flow execution",
                    "To configure adapter properties",
                    "To set tenant-level configurations",
                    "To define security settings"
                ],
                correct: 0,
                explanation: "Exchange Properties are used to store data that needs to be accessed throughout an integration flow execution, persisting across different processing steps.",
                difficulty: "medium"
            },
            {
                question: "Which integration pattern allows parallel execution of the same message to multiple endpoints?",
                options: [
                    "Splitter",
                    "Router",
                    "Multicast",
                    "Aggregator"
                ],
                correct: 2,
                explanation: "Multicast sends copies of the same message to multiple endpoints in parallel, useful when the same message needs to be delivered to multiple recipients simultaneously.",
                difficulty: "easy"
            },
            {
                question: "In SAP CPI, what is the default timeout for HTTP-based synchronous calls?",
                options: [
                    "30 seconds",
                    "60 seconds",
                    "120 seconds",
                    "300 seconds"
                ],
                correct: 1,
                explanation: "The default timeout for HTTP-based synchronous calls in SAP CPI is 60 seconds, though this can be configured in the adapter settings.",
                difficulty: "medium"
            },
            {
                question: "You need to integrate with a SOAP service that requires three pieces of data: customer ID from the incoming message, customer details from a REST API, and credit score from another SOAP service. What pattern efficiently gathers all required data?",
                options: [
                    "Sequential Request-Reply calls storing results in properties",
                    "Three separate integration flows with data store",
                    "Multicast to call all services simultaneously",
                    "Content Enricher pattern with sequential enrichment steps"
                ],
                correct: 3,
                explanation: "Content Enricher pattern allows you to progressively enrich the message with additional data from external sources. Sequential enrichment ensures each call can use data from previous enrichments if needed.",
                difficulty: "hard"
            },
            {
                question: "What is the purpose of the 'Script' step in SAP CPI?",
                options: [
                    "Only for debugging",
                    "To execute custom logic using Groovy or JavaScript",
                    "To schedule integration flows",
                    "To validate XML schemas"
                ],
                correct: 1,
                explanation: "Script steps allow execution of custom business logic using scripting languages like Groovy or JavaScript when standard components don't meet specific requirements.",
                difficulty: "easy"
            },
            {
                question: "Which statement about SAP CPI's 'Process Call' is correct?",
                options: [
                    "It can only call local integration flows",
                    "It enables synchronous calls to other integration flows in the same or different tenants",
                    "It's used for database calls only",
                    "It requires REST adapters"
                ],
                correct: 1,
                explanation: "Process Call allows synchronous invocation of other integration flows, either within the same tenant (via Process Direct) or in different systems (via HTTP).",
                difficulty: "medium"
            },
            {
                question: "In a content-based router with 5 conditions, none match the incoming message. What happens if no 'Default Route' is configured?",
                options: [
                    "Message is automatically logged and dropped",
                    "Integration flow throws an exception",
                    "Message is sent to all routes",
                    "Message continues to the next step after router"
                ],
                correct: 1,
                explanation: "Without a default route and no matching conditions, the router throws an exception causing the integration flow to fail, as there's no defined path for the message.",
                difficulty: "medium"
            },
            {
                question: "Your integration receives 10,000 records daily in a single file at midnight. Processing all records takes 3 hours, but you need to provide status updates every 30 minutes showing how many records are processed. What design enables this?",
                options: [
                    "Process all at once and send one final update",
                    "Use splitter with aggregator and periodic persistence to data store for tracking",
                    "Create 10,000 separate messages and monitor each",
                    "Use multicast to send updates while processing"
                ],
                correct: 1,
                explanation: "Split the file into individual records, process them, and periodically persist progress to a data store. A separate scheduled flow can read the data store and send status updates every 30 minutes.",
                difficulty: "hard"
            }
        ],
        60: [
            // Add 60 questions for Section 1 here (first 30 can be the same as above, plus 30 more)
            // For now, this array is empty - you'll add these questions
        ]
    },
    
    // Section 2: Message Processing
    2: {
        30: [
            // Add 30 questions for Section 2 here
        ],
        60: [
            // Add 60 questions for Section 2 here
        ]
    },
    
    // Section 3: Security & Adapters
    3: {
        30: [
            // Add 30 questions for Section 3 here
        ],
        60: [
            // Add 60 questions for Section 3 here
        ]
    },
    
    // Section 4: Monitoring & Error Handling
    4: {
        30: [
            // Add 30 questions for Section 4 here
        ],
        60: [
            // Add 60 questions for Section 4 here
        ]
    },
    
    // Section 5: Advanced Integration
    5: {
        30: [
            // Add 30 questions for Section 5 here
        ],
        60: [
            // Add 60 questions for Section 5 here
        ]
    },
    
    // Section 6: Best Practices & Optimization
    6: {
        30: [
            // Add 30 questions for Section 6 here
        ],
        60: [
            // Add 60 questions for Section 6 here
        ]
    }
};