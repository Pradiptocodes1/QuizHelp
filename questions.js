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
        60: 
            // Additional 30 questions for Section 1: Integration Basics (Questions 31-60)
// These complement the existing 30 questions
[
    {
        question: "What is the primary purpose of an Integration Flow in SAP CPI?",
        options: [
            "To store configuration data",
            "To define the message processing logic and routing between systems",
            "To monitor system performance",
            "To manage user authentication"
        ],
        correct: 1,
        explanation: "An Integration Flow (iFlow) defines the complete message processing logic, including how messages are received, transformed, routed, and sent to target systems.",
        difficulty: "easy"
    },
    {
        question: "Which component is used to conditionally execute different processing logic based on message content?",
        options: [
            "Filter",
            "Content-Based Router",
            "Splitter",
            "Content Modifier"
        ],
        correct: 1,
        explanation: "Content-Based Router evaluates conditions on message content and routes to different processing branches, enabling conditional logic in integration flows.",
        difficulty: "easy"
    },
    {
        question: "In SAP CPI, what does XPath primarily help you do?",
        options: [
            "Connect to databases",
            "Navigate and extract data from XML documents",
            "Encrypt messages",
            "Schedule integration flows"
        ],
        correct: 1,
        explanation: "XPath is a query language used to navigate XML document structure and extract specific data elements or attributes from XML messages.",
        difficulty: "easy"
    },
    {
        question: "What is the purpose of the 'Write Variables' step in an integration flow?",
        options: [
            "To write data to external files",
            "To set or update exchange properties and headers during processing",
            "To create database records",
            "To log debug information"
        ],
        correct: 1,
        explanation: "Write Variables (or Content Modifier in write mode) sets or updates message headers and exchange properties, storing temporary data during message processing.",
        difficulty: "easy"
    },
    {
        question: "Your integration flow processes orders, but 15% arrive with missing customer IDs. These should be sent to a manual review queue while valid orders continue processing. What's the most efficient approach?",
        options: [
            "Use exception handling to catch all errors",
            "Use Content-Based Router with validation condition and separate routes",
            "Process all orders and fix data in target system",
            "Use a filter to drop invalid messages"
        ],
        correct: 1,
        explanation: "Content-Based Router with a validation condition (checking if customer ID exists) allows you to route invalid messages to a review queue while valid messages continue normal processing, maintaining efficiency.",
        difficulty: "medium"
    },
    {
        question: "What happens to message properties when using a 'Send' step to call an external system?",
        options: [
            "They are automatically sent to the external system",
            "They remain in the integration flow but are not sent externally",
            "They are converted to HTTP headers",
            "They are deleted after the send"
        ],
        correct: 1,
        explanation: "Exchange properties are internal to the integration flow and remain available throughout processing but are not sent to external systems unless explicitly mapped to headers or body.",
        difficulty: "medium"
    },
    {
        question: "Which expression would correctly access a header named 'OrderID' using Simple Expression Language?",
        options: [
            "${header.OrderID}",
            "${property.OrderID}",
            "${body.OrderID}",
            "${exchange.OrderID}"
        ],
        correct: 0,
        explanation: "In Simple Expression Language, headers are accessed using ${header.headerName} syntax, properties use ${property.propertyName}, and body uses ${body}.",
        difficulty: "medium"
    },
    {
        question: "What is the primary difference between a 'Local Integration Process' and a regular integration flow?",
        options: [
            "Local Integration Process runs faster",
            "Local Integration Process is a reusable subprocess within an iFlow without its own endpoint",
            "Local Integration Process requires separate deployment",
            "They are identical"
        ],
        correct: 1,
        explanation: "Local Integration Process is a reusable subprocess within a single integration flow, used to modularize logic without creating a separate deployable artifact with its own endpoint.",
        difficulty: "medium"
    },
    {
        question: "You need to process a message through three sequential transformations: JSON to XML, XML enrichment, then XML to target format. Each transformation is complex with 200+ lines of code. What design promotes maintainability?",
        options: [
            "Put all transformations in one large Groovy script",
            "Use separate Local Integration Processes for each transformation",
            "Create three separate integration flows",
            "Use inline XSLT for all transformations"
        ],
        correct: 1,
        explanation: "Local Integration Processes allow you to modularize complex logic within a single iFlow, improving readability, maintainability, and reusability while keeping related logic together.",
        difficulty: "medium"
    },
    {
        question: "In SAP CPI, what is the purpose of the 'Exception Subprocess'?",
        options: [
            "To process high-priority messages",
            "To define error handling logic that executes when exceptions occur",
            "To create backup copies of messages",
            "To validate message formats"
        ],
        correct: 1,
        explanation: "Exception Subprocess defines custom error handling logic that executes when exceptions occur in the integration flow, allowing you to implement retry logic, logging, or alternative processing.",
        difficulty: "easy"
    },
    {
        question: "What is the maximum size limit for a single message payload in SAP CPI by default?",
        options: [
            "10 MB",
            "40 MB",
            "100 MB",
            "No limit"
        ],
        correct: 1,
        explanation: "The default maximum message size in SAP CPI is 40 MB. Messages larger than this require special handling like streaming or chunking.",
        difficulty: "medium"
    },
    {
        question: "Which of the following best describes 'Message Mapping' in SAP CPI?",
        options: [
            "A visual tool to map fields between source and target structures",
            "A database table mapping",
            "A network routing configuration",
            "A user permission mapping"
        ],
        correct: 0,
        explanation: "Message Mapping provides a graphical interface to define field-level mappings between source and target message structures, supporting transformations without coding.",
        difficulty: "easy"
    },
    {
        question: "You're building an integration that receives 1000 customer records but must call an external validation API for each customer. The API allows 5 concurrent connections. What pattern optimizes processing time while respecting the limit?",
        options: [
            "Sequential processing of all records",
            "Splitter with parallel processing limited to 5 threads",
            "Send all 1000 requests simultaneously",
            "Batch all records into one API call"
        ],
        correct: 1,
        explanation: "Using a Splitter with parallel processing pool size of 5 maximizes throughput by fully utilizing available concurrent connections while respecting the API's connection limit.",
        difficulty: "hard"
    },
    {
        question: "What does the 'Gather' step do in an integration flow?",
        options: [
            "Collects log messages",
            "Gathers multiple split messages back into a single message or collection",
            "Collects system statistics",
            "Gathers user credentials"
        ],
        correct: 1,
        explanation: "Gather (or Aggregator) collects multiple messages that were previously split and combines them back into a single message or collection, opposite of the Split operation.",
        difficulty: "easy"
    },
    {
        question: "In SAP CPI, what is the 'Design' workspace used for?",
        options: [
            "Monitoring deployed flows",
            "Creating and editing integration artifacts like iFlows, mappings, and scripts",
            "Managing user access",
            "Viewing system logs"
        ],
        correct: 1,
        explanation: "The Design workspace is where you create, edit, and manage all integration artifacts including integration flows, message mappings, value mappings, scripts, and other resources.",
        difficulty: "easy"
    },
    {
        question: "What is the purpose of 'Value Mapping' in SAP CPI?",
        options: [
            "To calculate message costs",
            "To map different value representations between systems (e.g., country codes)",
            "To validate message values",
            "To encrypt sensitive values"
        ],
        correct: 1,
        explanation: "Value Mapping maintains reusable lookup tables to convert values from one system's representation to another's (e.g., 'US' to 'USA', or product codes between systems).",
        difficulty: "easy"
    },
    {
        question: "Which statement about integration flow versioning is TRUE?",
        options: [
            "Only one version can exist at a time",
            "Multiple versions can exist, but only one can be deployed",
            "All versions are automatically deployed",
            "Versioning is not supported"
        ],
        correct: 1,
        explanation: "SAP CPI maintains version history of integration flows, allowing you to keep multiple versions, but only one version of an integration flow can be deployed and active at any given time.",
        difficulty: "medium"
    },
    {
        question: "You have an integration flow that processes invoices. During processing, you need to store the original invoice amount, calculate tax, then use both values later. What's the correct approach?",
        options: [
            "Store both in message headers",
            "Store original amount in exchange property, calculate and store tax in another property",
            "Store in external database",
            "Recalculate values when needed"
        ],
        correct: 1,
        explanation: "Exchange properties are designed for storing intermediate values that need to persist throughout the integration flow execution, making them ideal for storing calculated or extracted values.",
        difficulty: "medium"
    },
    {
        question: "What does the 'Deployment Status' indicator in SAP CPI show?",
        options: [
            "Message processing success rate",
            "Whether an integration flow is deployed and running on the runtime node",
            "Number of messages processed",
            "System resource usage"
        ],
        correct: 1,
        explanation: "Deployment Status indicates whether an integration artifact is deployed to the runtime environment and its current state (Started, Stopped, Error, etc.).",
        difficulty: "easy"
    },
    {
        question: "In SAP CPI, what is a 'Timer Start Event' used for?",
        options: [
            "To measure processing time",
            "To schedule integration flows to run automatically at specified intervals",
            "To timeout long-running processes",
            "To synchronize system clocks"
        ],
        correct: 1,
        explanation: "Timer Start Event (Scheduler) triggers integration flows to run automatically based on a schedule (cron expression), enabling periodic batch processing or polling scenarios.",
        difficulty: "easy"
    },
    {
        question: "You need to transform incoming CSV data to JSON, but the CSV structure varies (different column orders, optional fields). Manual mapping would require constant updates. What approach minimizes maintenance?",
        options: [
            "Create static mapping for each CSV variant",
            "Use Groovy script with dynamic parsing based on CSV headers",
            "Reject non-standard CSV formats",
            "Force all senders to use identical CSV format"
        ],
        correct: 1,
        explanation: "A Groovy script that reads CSV headers dynamically and maps to JSON based on column names (not positions) handles structural variations without requiring integration flow updates for each change.",
        difficulty: "hard"
    },
    {
        question: "What is the function of the 'Content Enricher' pattern?",
        options: [
            "To compress message content",
            "To retrieve additional data from external sources and add it to the message",
            "To remove unnecessary fields",
            "To validate message content"
        ],
        correct: 1,
        explanation: "Content Enricher pattern retrieves additional information from external sources (APIs, databases) and adds it to the existing message, enriching it with supplementary data.",
        difficulty: "easy"
    },
    {
        question: "In SAP CPI, what happens when you 'Undeploy' an integration flow?",
        options: [
            "The iFlow is deleted permanently",
            "The iFlow is removed from runtime but remains in design workspace",
            "All message logs are deleted",
            "The iFlow is locked and cannot be edited"
        ],
        correct: 1,
        explanation: "Undeploying removes the integration flow from the runtime environment (stops processing), but the design artifact remains in the Design workspace and can be redeployed anytime.",
        difficulty: "medium"
    },
    {
        question: "What is the purpose of the 'Decoder' step in an integration flow?",
        options: [
            "To decrypt encrypted messages",
            "To decode encoded content (Base64, MIME, etc.) into readable format",
            "To translate message language",
            "To decompress compressed data"
        ],
        correct: 1,
        explanation: "Decoder step decodes various encoding formats (Base64, MIME multipart, gzip) to convert encoded message content back to its original readable format.",
        difficulty: "easy"
    },
    {
        question: "Your integration receives daily sales files from 50 retail stores. Each store sends at different times throughout the day. You need to wait until all 50 files arrive, then combine them into one report. What pattern handles this efficiently?",
        options: [
            "Process each file immediately as it arrives",
            "Use Aggregator with correlation on date and completion condition of 50 messages",
            "Store files in data store and manually combine",
            "Use sequential processing with 50 receive steps"
        ],
        correct: 1,
        explanation: "Aggregator with correlation (e.g., on processing date) and completion condition (count=50 or timeout) waits for all expected messages, then combines them automatically when the condition is met.",
        difficulty: "hard"
    },
    {
        question: "What is an 'OData adapter' used for in SAP CPI?",
        options: [
            "Connecting to relational databases",
            "Connecting to SAP and non-SAP systems that expose OData services",
            "File transfer operations",
            "Email communication"
        ],
        correct: 1,
        explanation: "OData adapter enables integration with systems exposing OData services (RESTful protocol), commonly used for SAP S/4HANA, SuccessFactors, and other cloud applications.",
        difficulty: "easy"
    },
    {
        question: "In an integration flow, what does 'Streaming' mode help achieve?",
        options: [
            "Faster network transfer",
            "Processing large messages without loading entire content into memory",
            "Multiple parallel streams",
            "Live video processing"
        ],
        correct: 1,
        explanation: "Streaming mode processes large messages in chunks without loading the entire payload into memory, preventing out-of-memory errors and enabling handling of very large files.",
        difficulty: "medium"
    },
    {
        question: "What is the primary use of 'Function Libraries' in SAP CPI?",
        options: [
            "To store message logs",
            "To create reusable functions (Groovy/JavaScript) that can be shared across integration flows",
            "To manage system libraries",
            "To configure adapter libraries"
        ],
        correct: 1,
        explanation: "Function Libraries (Script Collections) store reusable scripts and functions that can be referenced by multiple integration flows, promoting code reuse and maintainability.",
        difficulty: "medium"
    },
    {
        question: "You're designing an integration where 90% of messages follow standard processing, but 10% need special handling based on a VIP customer flag. The special handling is complex with 15 additional steps. What design keeps the main flow clean?",
        options: [
            "Add all 15 steps with conditional execution in main flow",
            "Use Content-Based Router to route VIP messages to a Local Integration Process",
            "Process all messages the same way",
            "Create duplicate flows for VIP and regular customers"
        ],
        correct: 1,
        explanation: "Using Content-Based Router to route VIP messages to a separate Local Integration Process keeps the main flow clean and readable while isolating complex special-case logic in a dedicated subprocess.",
        difficulty: "medium"
    },
    {
        question: "What is the purpose of the 'Filter' component in SAP CPI?",
        options: [
            "To filter system logs",
            "To remove messages from processing based on specified conditions",
            "To clean message content",
            "To filter network traffic"
        ],
        correct: 1,
        explanation: "Filter component evaluates a condition and either allows messages to continue processing (if condition is true) or stops processing and drops messages (if false).",
        difficulty: "easy"
    },

    // Additional 30 questions for Section 1: Integration Basics (Questions 61-90)
// This is the third set of 30 questions for the 60-question array
    {
        question: "What is the purpose of the 'Encoder' step in an integration flow?",
        options: [
            "To encrypt messages for security",
            "To encode content into specific formats like Base64 or MIME",
            "To translate between languages",
            "To compress large files"
        ],
        correct: 1,
        explanation: "Encoder step converts message content into encoded formats (Base64, MIME multipart, etc.), often required when transmitting binary data or when the target system expects encoded content.",
        difficulty: "easy"
    },
    {
        question: "In SAP CPI, what is a 'Data Store'?",
        options: [
            "A permanent database for business data",
            "A temporary key-value storage for persisting data across integration flow executions",
            "A backup system for integration flows",
            "A configuration repository"
        ],
        correct: 1,
        explanation: "Data Store provides temporary key-value storage that persists data beyond a single message execution, useful for implementing patterns like idempotency checks, caching, or state management.",
        difficulty: "medium"
    },
    {
        question: "What is the correct syntax to access a property named 'CustomerName' in a Groovy script?",
        options: [
            "message.header.CustomerName",
            "message.getProperty('CustomerName')",
            "message.body.CustomerName",
            "exchange.CustomerName"
        ],
        correct: 1,
        explanation: "In Groovy scripts within SAP CPI, properties are accessed using message.getProperty('propertyName') method, while headers use message.getHeader('headerName').",
        difficulty: "medium"
    },
    {
        question: "You have an integration that processes purchase orders. Each order contains 1-50 line items, and you need to validate each line item against an inventory API. If any line item fails validation, the entire order should be rejected. What's the most efficient approach?",
        options: [
            "Split order, validate all items in parallel, aggregate results and check for failures",
            "Validate each item sequentially and stop on first failure",
            "Send entire order to validation API",
            "Skip validation for orders with more than 10 items"
        ],
        correct: 0,
        explanation: "Parallel validation of split line items is fastest, while aggregation allows you to collect all results and make a single decision about order acceptance, providing complete validation feedback.",
        difficulty: "hard"
    },
    {
        question: "What is the primary purpose of 'JSONPath' in SAP CPI?",
        options: [
            "To route messages based on content",
            "To query and extract data from JSON documents",
            "To convert JSON to XML",
            "To validate JSON schemas"
        ],
        correct: 1,
        explanation: "JSONPath is a query language for JSON, similar to XPath for XML, allowing you to navigate JSON structures and extract specific values or objects.",
        difficulty: "easy"
    },
    {
        question: "In an integration flow, what does the 'Stop' message event do?",
        options: [
            "Terminates the entire integration flow immediately",
            "Gracefully ends processing for the current message without error",
            "Pauses the integration flow",
            "Stops all running integrations"
        ],
        correct: 1,
        explanation: "Stop (End Message) event gracefully terminates processing for the current message with success status, useful in conditional routing when certain messages don't require further processing.",
        difficulty: "easy"
    },
    {
        question: "What is the maximum number of parallel processing threads recommended for a single integration flow?",
        options: [
            "5",
            "10",
            "20",
            "It depends on tenant resources and message complexity"
        ],
        correct: 3,
        explanation: "There's no fixed limit; optimal thread count depends on available tenant resources, message size, processing complexity, and external system constraints. Over-provisioning can cause resource exhaustion.",
        difficulty: "medium"
    },
    {
        question: "You need to call three external APIs sequentially, where each API requires data from the previous response. If any API fails, you need to retry that specific API call up to 3 times before failing the entire flow. What pattern implements this?",
        options: [
            "Single try-catch around all three calls with retry",
            "Separate exception subprocess for each API call with individual retry logic",
            "No exception handling, let system retry automatically",
            "Call all APIs in parallel"
        ],
        correct: 1,
        explanation: "Individual exception subprocesses for each API call allow granular retry logic per API, ensuring failures retry only the failed step while preserving successful results from previous calls.",
        difficulty: "hard"
    },
    {
        question: "What is a 'Simulation' in SAP CPI used for?",
        options: [
            "Load testing integration flows",
            "Testing integration flows with sample data before deployment",
            "Simulating network conditions",
            "Creating training environments"
        ],
        correct: 1,
        explanation: "Simulation allows you to test integration flows with sample input data in the design phase before deployment, helping identify issues early without affecting production systems.",
        difficulty: "easy"
    },
    {
        question: "Which component would you use to extract a subset of data from a message without splitting it?",
        options: [
            "Splitter",
            "Filter",
            "Content Modifier with extraction logic",
            "Aggregator"
        ],
        correct: 2,
        explanation: "Content Modifier can extract specific data from the message body using XPath, JSONPath, or scripts and either modify the body or store extracted values in headers/properties.",
        difficulty: "medium"
    },
    {
        question: "In SAP CPI, what is 'Message Persistence'?",
        options: [
            "Automatic backup of all messages",
            "Storing messages in the database for recovery or replay purposes",
            "Archiving old messages",
            "Caching frequently used messages"
        ],
        correct: 1,
        explanation: "Message Persistence stores messages in the database at specific points in the integration flow, enabling recovery, replay, or debugging if errors occur in subsequent processing steps.",
        difficulty: "medium"
    },
    {
        question: "What happens if you deploy an integration flow with the same ID as an already deployed flow?",
        options: [
            "Deployment fails with an error",
            "The new version replaces the old version",
            "Both versions run simultaneously",
            "The old version is archived automatically"
        ],
        correct: 1,
        explanation: "Deploying an integration flow with an existing ID replaces the currently deployed version with the new version, following a hot deployment pattern.",
        difficulty: "medium"
    },
    {
        question: "You're integrating with a vendor API that returns paginated results (100 records per page). Your request needs all 2,500 records combined into one dataset. The API requires page number in the request. What pattern handles this efficiently?",
        options: [
            "Make 25 separate API calls manually",
            "Use Looping Process Call with counter and aggregation",
            "Request only first page",
            "Use multicast to call all pages simultaneously"
        ],
        correct: 1,
        explanation: "Looping Process Call with a counter (1-25) calls the API iteratively with different page numbers, while aggregation combines all responses into a single dataset automatically.",
        difficulty: "hard"
    },
    {
        question: "What is the purpose of the 'Validator' step in an integration flow?",
        options: [
            "To validate user credentials",
            "To validate message structure against XML Schema or JSON Schema",
            "To validate system connections",
            "To validate integration flow syntax"
        ],
        correct: 1,
        explanation: "Validator step validates message content against defined schemas (XSD for XML, JSON Schema for JSON), ensuring data quality and structure compliance before further processing.",
        difficulty: "easy"
    },
    {
        question: "In SAP CPI, what are 'Externalized Parameters' best used for?",
        options: [
            "Sharing data between tenants",
            "Storing values that may change between environments without modifying the iFlow",
            "Exporting integration flow designs",
            "External system authentication"
        ],
        correct: 1,
        explanation: "Externalized Parameters allow you to define configurable values (endpoints, credentials, thresholds) that can be different across environments (dev, test, prod) without changing the iFlow design.",
        difficulty: "easy"
    },
    {
        question: "What is the function of a 'Sequencer' in message processing?",
        options: [
            "To encrypt messages in sequence",
            "To ensure messages are processed in a specific order based on sequence numbers",
            "To sequence API calls",
            "To create message sequences"
        ],
        correct: 1,
        explanation: "Sequencer reorders messages based on sequence numbers or timestamps, ensuring they are processed in the correct order even if they arrive out of sequence.",
        difficulty: "medium"
    },
    {
        question: "Which statement about SAP CPI's 'Edmx to XML Converter' is correct?",
        options: [
            "It converts XML to OData format",
            "It converts OData EDMX metadata to XML format for processing",
            "It's used for email conversion",
            "It converts Excel to XML"
        ],
        correct: 1,
        explanation: "EDMX to XML Converter transforms OData service metadata (EDMX format) into XML, allowing you to process or extract service structure information within integration flows.",
        difficulty: "medium"
    },
    {
        question: "You have an integration that receives files via SFTP every 5 minutes. Processing each file takes 8 minutes. After 1 hour, how many files are pending processing?",
        options: [
            "0 files",
            "6 files",
            "12 files",
            "It depends on parallel processing configuration"
        ],
        correct: 3,
        explanation: "With sequential processing, files queue up (12 received, ~7 processed = 5 pending). With parallel processing or multiple workers, the number varies. The answer depends on the integration flow's concurrency configuration.",
        difficulty: "hard"
    },
    {
        question: "What is the primary use of 'Script Collection' artifacts?",
        options: [
            "Collecting error logs",
            "Storing reusable Groovy or JavaScript functions accessible across multiple iFlows",
            "Collecting system metrics",
            "Script version control"
        ],
        correct: 1,
        explanation: "Script Collections store reusable script functions that can be referenced by multiple integration flows, promoting code reuse and centralized maintenance of common logic.",
        difficulty: "easy"
    },
    {
        question: "In SAP CPI, what does 'Idempotent Repository' help achieve?",
        options: [
            "Faster message processing",
            "Preventing duplicate processing of the same message",
            "Encrypting messages",
            "Load balancing"
        ],
        correct: 1,
        explanation: "Idempotent Repository tracks message IDs to ensure each unique message is processed only once, preventing duplicate processing even if the same message is received multiple times.",
        difficulty: "medium"
    },
    {
        question: "What is the purpose of the 'Resequencer' pattern?",
        options: [
            "To split messages into sequences",
            "To reorder messages based on sequence information to ensure correct processing order",
            "To assign sequence numbers",
            "To validate message sequences"
        ],
        correct: 1,
        explanation: "Resequencer collects out-of-order messages and reorders them based on sequence numbers or other criteria before passing them for processing, ensuring sequential integrity.",
        difficulty: "medium"
    },
    {
        question: "You're building an integration where incoming messages have a 'Priority' field (1-5). Priority 1 messages must be processed immediately, while priority 5 can wait up to 1 hour. All messages must eventually be processed. What architecture supports this?",
        options: [
            "Single queue with FIFO processing",
            "Multiple queues (one per priority) with separate polling frequencies",
            "Process all messages identically",
            "Reject low priority messages"
        ],
        correct: 1,
        explanation: "Priority-based queuing with separate processing frequencies ensures high-priority messages are processed immediately while low-priority messages are processed during available capacity, ensuring all messages are eventually handled.",
        difficulty: "hard"
    },
    {
        question: "What does the 'Join' step do in an integration flow?",
        options: [
            "Joins messages from different sources",
            "Waits for multiple parallel processing branches to complete before continuing",
            "Joins data tables",
            "Connects to external systems"
        ],
        correct: 1,
        explanation: "Join step synchronizes multiple parallel processing branches, waiting for all branches to complete before continuing with the next step, similar to a barrier in concurrent programming.",
        difficulty: "medium"
    },
    {
        question: "In SAP CPI, what is a 'Timer-Based Start Event' primarily used for?",
        options: [
            "Measuring integration performance",
            "Triggering integration flows on a schedule for batch processing or polling",
            "Timing out long processes",
            "Clock synchronization"
        ],
        correct: 1,
        explanation: "Timer-Based Start Event (Scheduler) triggers integration flows automatically based on cron expressions, ideal for periodic batch jobs, file polling, or scheduled data synchronization.",
        difficulty: "easy"
    },
    {
        question: "What is the benefit of using 'Local Integration Process' over creating separate integration flows?",
        options: [
            "Better performance",
            "Modularization within a single iFlow, easier maintenance, no separate endpoint needed",
            "Automatic scaling",
            "Enhanced security"
        ],
        correct: 1,
        explanation: "Local Integration Processes provide modularization and reusability within a single iFlow without creating separate deployable artifacts, simplifying maintenance and avoiding endpoint proliferation.",
        difficulty: "medium"
    },
    {
        question: "Which expression in Simple Expression Language retrieves the message body?",
        options: [
            "${message.body}",
            "${body}",
            "${content}",
            "${payload}"
        ],
        correct: 1,
        explanation: "In Simple Expression Language, ${body} is used to access the message body content. It's the simplest and most direct way to reference the payload.",
        difficulty: "easy"
    },
    {
        question: "You need to integrate with a legacy system that can only process 10 messages per minute and requires 2-second response time per message. Your upstream system sends 30 messages per minute. What happens without proper design?",
        options: [
            "All messages process successfully",
            "Messages queue up indefinitely causing memory issues and timeouts",
            "System auto-scales to handle load",
            "Messages are automatically distributed"
        ],
        correct: 1,
        explanation: "Without throttling/rate limiting, messages accumulate in queues faster than they can be processed (30 in, 10 out per minute), eventually causing memory exhaustion, timeouts, and system instability.",
        difficulty: "hard"
    },
    {
        question: "What is 'Content Conversion' in SAP CPI?",
        options: [
            "Converting between currencies",
            "Converting between different message formats like CSV, JSON, XML",
            "Converting file encoding",
            "Converting time zones"
        ],
        correct: 1,
        explanation: "Content Conversion transforms messages between different formats (CSV to XML, JSON to XML, etc.), enabling systems with different format requirements to communicate.",
        difficulty: "easy"
    },
    {
        question: "In SAP CPI, what is the maximum number of integration flows recommended per integration package?",
        options: [
            "5",
            "10",
            "There is no strict limit, organize logically by business domain",
            "50"
        ],
        correct: 2,
        explanation: "There's no technical limit; packages should be organized logically by business domain, project, or functional area for better organization and governance rather than by arbitrary numbers.",
        difficulty: "medium"
    },
    {
        question: "What is the purpose of 'Trace' logging level in SAP CPI?",
        options: [
            "For production monitoring",
            "For detailed debugging showing step-by-step execution and message content",
            "For error logging only",
            "For performance metrics"
        ],
        correct: 1,
        explanation: "Trace logging provides detailed step-by-step execution information including message content at each step, essential for debugging but should be used carefully in production due to performance impact.",
        difficulty: "medium"
    }

        ]
    },
    
    // Section 2: Message Processing
    2: {
        30: // Section 2: Message Processing - 30 Questions
        // Mix of difficulty: ~20% Easy, ~50% Medium, ~30% Hard
        // Question types: Simple, Case-based, Conceptual, Theoretical, Practical
        
        [
            {
                question: "What is the default character encoding used for message processing in SAP CPI?",
                options: [
                    "ASCII",
                    "UTF-8",
                    "ISO-8859-1",
                    "UTF-16"
                ],
                correct: 1,
                explanation: "UTF-8 is the default character encoding in SAP CPI, supporting international characters and ensuring compatibility across different systems and languages.",
                difficulty: "easy"
            },
            {
                question: "You're processing XML messages where element <OrderDate> sometimes appears as '2024-01-15' and sometimes as '15/01/2024'. You need to standardize to ISO format (YYYY-MM-DD). Which approach is most maintainable?",
                options: [
                    "Use multiple Content Modifiers with XPath replacements",
                    "Create a Groovy script with date parsing logic that handles both formats",
                    "Use XSLT transformation with date templates",
                    "Reject non-ISO formatted messages"
                ],
                correct: 1,
                explanation: "A Groovy script with robust date parsing (detecting format and converting to ISO) is most maintainable as it centralizes logic, handles edge cases, and can be easily updated for new formats without changing the iFlow structure.",
                difficulty: "medium"
            },
            {
                question: "In message processing, what is 'Message Splitting' primarily used for?",
                options: [
                    "Dividing large files into smaller network packets",
                    "Breaking a single message containing multiple items into individual messages",
                    "Splitting processing load across servers",
                    "Separating message header from body"
                ],
                correct: 1,
                explanation: "Message Splitting divides one message containing multiple logical items (like multiple orders in a batch file) into separate messages, each representing one item for individual processing.",
                difficulty: "easy"
            },
            {
                question: "What happens to the original message body after a Splitter processes it?",
                options: [
                    "It's deleted immediately",
                    "It remains accessible in the exchange for potential aggregation",
                    "It's automatically backed up",
                    "It's converted to a different format"
                ],
                correct: 1,
                explanation: "The original message body is preserved in the exchange and can be accessed later, particularly useful when aggregating split messages back together or for logging purposes.",
                difficulty: "medium"
            },
            {
                question: "Your integration receives a CSV file with 10,000 customer records. Each record needs enrichment from an external API (50ms response time). Processing sequentially takes 8.3 minutes. Management requires processing under 2 minutes. What's the theoretical minimum processing time achievable?",
                options: [
                    "50 milliseconds",
                    "500 milliseconds (assuming 10 parallel threads)",
                    "50 seconds (assuming 20 parallel threads)",
                    "Cannot be reduced below 8.3 minutes"
                ],
                correct: 2,
                explanation: "With perfect parallelization: 10,000 records ÷ 20 threads = 500 records per thread × 50ms = 25 seconds, plus overhead ≈ 50 seconds. However, practical limits (API rate limits, system resources) may prevent achieving this theoretical minimum.",
                difficulty: "hard"
            },
            {
                question: "In SAP CPI, what does the 'Streaming' XPath option do when processing XML?",
                options: [
                    "Streams data to multiple endpoints",
                    "Processes XML in chunks without loading the entire document into memory",
                    "Speeds up XPath evaluation",
                    "Enables real-time XML processing"
                ],
                correct: 1,
                explanation: "Streaming XPath processes large XML documents in chunks using SAX parsing, preventing memory overflow by not loading the entire document into memory at once.",
                difficulty: "medium"
            },
            {
                question: "What is 'Message Transformation' in the context of integration?",
                options: [
                    "Encrypting messages",
                    "Converting message format and structure from source to target system requirements",
                    "Compressing messages",
                    "Routing messages"
                ],
                correct: 1,
                explanation: "Message Transformation converts messages from the source system's format and structure to match the target system's requirements, including format conversion, field mapping, and data manipulation.",
                difficulty: "easy"
            },
            {
                question: "You have an integration flow that transforms JSON to XML using XSLT. The transformation works for 90% of messages but fails for messages containing special characters like '&' and '<'. What's the root cause and solution?",
                options: [
                    "XSLT syntax error; rewrite transformation",
                    "JSON is not properly escaped before transformation; use JSON to XML converter first",
                    "Character encoding mismatch; change encoding to UTF-16",
                    "XSLT doesn't support special characters; use Groovy instead"
                ],
                correct: 1,
                explanation: "Special characters in JSON strings need proper escaping when converted to XML. Using a native JSON to XML converter handles escaping automatically, while direct XSLT on JSON text can misinterpret special characters as XML syntax.",
                difficulty: "medium"
            },
            {
                question: "What is the purpose of 'XPath' expressions in message processing?",
                options: [
                    "To define message routing paths",
                    "To navigate and extract specific data from XML documents",
                    "To create XML documents",
                    "To validate XML syntax"
                ],
                correct: 1,
                explanation: "XPath is a query language that navigates XML document structure and extracts specific elements, attributes, or values, essential for content-based routing and data extraction.",
                difficulty: "easy"
            },
            {
                question: "In a Splitter configuration, what does the 'Parallel Processing' option enable?",
                options: [
                    "Processing split messages simultaneously using multiple threads",
                    "Splitting messages into parallel formats",
                    "Running multiple splitters concurrently",
                    "Parallel deployment of integration flows"
                ],
                correct: 0,
                explanation: "Parallel Processing allows split messages to be processed concurrently using multiple threads, significantly reducing total processing time for independent messages.",
                difficulty: "medium"
            },
            {
                question: "You're processing a 500MB XML file containing 1 million product records. Memory on your tenant is limited. The iFlow uses XPath to extract data. What happens during execution?",
                options: [
                    "Processes successfully with standard configuration",
                    "Out of memory error as entire document loads into memory",
                    "Automatic streaming activates",
                    "File is rejected as too large"
                ],
                correct: 1,
                explanation: "Standard XPath loads the entire XML document into memory (DOM parsing). A 500MB file will cause out-of-memory errors. This requires streaming XPath or processing the file in chunks using iterative reading approaches.",
                difficulty: "hard"
            },
            {
                question: "What is 'JSONPath' used for in message processing?",
                options: [
                    "Routing JSON messages",
                    "Querying and extracting data from JSON documents",
                    "Converting JSON to XML",
                    "Validating JSON structure"
                ],
                correct: 1,
                explanation: "JSONPath is a query language for JSON, similar to XPath for XML, enabling navigation through JSON structures and extraction of specific values or objects.",
                difficulty: "easy"
            },
            {
                question: "In an Aggregator configuration, what does the 'Completion Condition' define?",
                options: [
                    "When aggregation is finished",
                    "The criteria that determines when all expected messages have arrived and aggregation can complete",
                    "The data completeness requirements",
                    "When to timeout the aggregation"
                ],
                correct: 1,
                explanation: "Completion Condition specifies when the aggregator has received all expected messages (e.g., message count, timeout, or specific message content) and should combine them into a single output message.",
                difficulty: "medium"
            },
            {
                question: "Your integration aggregates daily sales reports from 20 stores. Store #7's system is down for maintenance and won't send data for 3 days. Your aggregator waits for all 20 stores. Without changes, what happens?",
                options: [
                    "Aggregation completes with 19 stores",
                    "Aggregation waits indefinitely until timeout or all 20 messages arrive",
                    "Store #7's data is automatically substituted with zeros",
                    "Aggregation fails immediately"
                ],
                correct: 1,
                explanation: "Without a timeout or conditional completion logic, the aggregator waits for all expected messages (20). If configured with timeout, it completes with available messages when timeout expires; otherwise, it waits indefinitely.",
                difficulty: "medium"
            },
            {
                question: "What is the primary difference between 'Streaming' and 'Non-Streaming' message processing?",
                options: [
                    "Streaming is faster",
                    "Streaming processes data incrementally without loading entire content into memory",
                    "Streaming supports more formats",
                    "Streaming is only for video data"
                ],
                correct: 1,
                explanation: "Streaming processes data in chunks or streams, handling large files without loading them entirely into memory, while non-streaming loads complete content into memory before processing.",
                difficulty: "medium"
            },
            {
                question: "You need to merge customer data from three sources: CRM (XML), ERP (JSON), and Legacy (CSV). Each source has 50,000 records with common customer ID. Final output needs all data combined per customer in JSON. What processing strategy is most efficient?",
                options: [
                    "Convert all to XML, use XSLT to merge, convert to JSON",
                    "Load all three sources into Data Store, use Groovy to lookup and merge by ID",
                    "Process sequentially, enriching message progressively from each source",
                    "Use three parallel Content Enrichers followed by merge script"
                ],
                correct: 1,
                explanation: "Loading all sources into a Data Store (key-value by customer ID) and using Groovy for lookup-based merging is most efficient for large datasets, avoiding repeated external calls and enabling fast in-memory joins.",
                difficulty: "hard"
            },
            {
                question: "What does the 'Split Strategy' in a Splitter define?",
                options: [
                    "How to divide network bandwidth",
                    "The logic used to divide the message (XPath, JSONPath, or custom expression)",
                    "How to split processing time",
                    "The number of output messages"
                ],
                correct: 1,
                explanation: "Split Strategy defines the technical approach to divide the message: XPath for XML elements, JSONPath for JSON arrays, line-based for CSV, or custom expressions for other formats.",
                difficulty: "medium"
            },
            {
                question: "In message processing, what is 'Schema Validation'?",
                options: [
                    "Validating database schemas",
                    "Verifying message structure and data types against predefined XSD or JSON schema",
                    "Validating integration flow design",
                    "Checking system architecture"
                ],
                correct: 1,
                explanation: "Schema Validation checks if message structure, elements, data types, and constraints conform to a predefined schema (XSD for XML, JSON Schema for JSON), ensuring data quality.",
                difficulty: "easy"
            },
            {
                question: "Your XML message has a repeating element <Item> that appears 0 to 1000 times. You need to extract all items where <Status> equals 'PENDING' and <Amount> exceeds 1000. What XPath expression achieves this?",
                options: [
                    "//Item[Status='PENDING' and Amount>1000]",
                    "//Item/Status='PENDING' AND Amount>1000",
                    "//Item[@Status='PENDING' and @Amount>1000]",
                    "//Item[Status eq 'PENDING'][Amount gt 1000]"
                ],
                correct: 0,
                explanation: "XPath syntax //Item[Status='PENDING' and Amount>1000] selects all Item elements where child element Status equals 'PENDING' AND child element Amount is greater than 1000.",
                difficulty: "medium"
            },
            {
                question: "What is 'Message Enrichment' in integration patterns?",
                options: [
                    "Making messages longer",
                    "Adding additional data to messages from external sources or lookups",
                    "Improving message quality",
                    "Encrypting message content"
                ],
                correct: 1,
                explanation: "Message Enrichment augments incoming messages with additional information retrieved from external systems, databases, or reference data, creating a more complete message for downstream processing.",
                difficulty: "easy"
            },
            {
                question: "You're using a Splitter with 'Parallel Processing' and 10 threads. One split message takes 30 seconds to process due to external API slowness, while others take 1 second. What's the total processing time for 100 split messages?",
                options: [
                    "100 seconds",
                    "30 seconds",
                    "Approximately 40 seconds (9 batches of fast messages + 10 slow messages)",
                    "10 seconds"
                ],
                correct: 2,
                explanation: "With 10 threads: 90 messages process in ~9 batches (1 second each), while 10 slow messages run in parallel taking 30 seconds. Total ≈ 9 + 30 = ~39-40 seconds, assuming the slow message is in the first batch processed.",
                difficulty: "hard"
            },
            {
                question: "What does 'XPath version 2.0' provide over version 1.0?",
                options: [
                    "Faster processing",
                    "Enhanced functions, better string manipulation, and support for sequences",
                    "Better security",
                    "XML encryption capabilities"
                ],
                correct: 1,
                explanation: "XPath 2.0 adds numerous functions (string, date, numeric), improved type system, support for sequences, regex support, and more powerful expressions compared to version 1.0's basic capabilities.",
                difficulty: "medium"
            },
            {
                question: "In a Groovy script, how do you access the message body as a String?",
                options: [
                    "def body = message.body",
                    "def body = message.getBody(String)",
                    "def body = message.getBody(String.class)",
                    "def body = message.getBodyAsString()"
                ],
                correct: 2,
                explanation: "The correct syntax is message.getBody(String.class) which retrieves and converts the message body to a String type. This is the standard Camel API pattern in SAP CPI's Groovy scripts.",
                difficulty: "medium"
            },
            {
                question: "What is 'XSLT' used for in message transformation?",
                options: [
                    "Compressing XML files",
                    "Transforming XML documents from one structure to another using template rules",
                    "Validating XML syntax",
                    "Encrypting XML content"
                ],
                correct: 1,
                explanation: "XSLT (Extensible Stylesheet Language Transformations) transforms XML documents from one structure to another using template-based rules, enabling complex structural and content transformations.",
                difficulty: "easy"
            },
            {
                question: "Your integration receives messages with a field 'CustomerType' that can be 'Premium', 'PREMIUM', 'premium', or 'P'. You need to normalize all variations to 'PREMIUM'. Where should this normalization occur in a well-designed flow?",
                options: [
                    "At every point where CustomerType is used",
                    "As early as possible, right after message reception before any processing",
                    "Just before sending to target system",
                    "In the target system"
                ],
                correct: 1,
                explanation: "Normalizing data early (immediately after reception) ensures all downstream processing works with consistent data, reducing conditional logic throughout the flow and preventing errors from inconsistent formats.",
                difficulty: "medium"
            },
            {
                question: "What is the purpose of 'CSV to XML Converter' in SAP CPI?",
                options: [
                    "To compress CSV files",
                    "To convert CSV formatted data into XML structure for easier processing",
                    "To validate CSV content",
                    "To split CSV files"
                ],
                correct: 1,
                explanation: "CSV to XML Converter transforms CSV data into XML format, making it easier to process using XPath, XSLT, and other XML-based tools within integration flows.",
                difficulty: "easy"
            },
            {
                question: "You're aggregating order confirmations from 5 systems. System A sends XML, System B sends JSON, System C sends CSV, System D sends EDI, and System E sends plain text. The aggregated output must be JSON. What's the most maintainable aggregation approach?",
                options: [
                    "Aggregate in native formats, convert at the end",
                    "Convert all to a common intermediate format (e.g., XML) before aggregation, then convert to JSON",
                    "Use five separate aggregators for each format",
                    "Aggregate in JSON directly from each source"
                ],
                correct: 1,
                explanation: "Converting to a common intermediate format before aggregation standardizes processing, simplifies aggregation logic, and makes the flow more maintainable. The single final conversion to JSON ensures correct output format.",
                difficulty: "hard"
            },
            {
                question: "In Groovy scripting within SAP CPI, what does 'messageLog' object allow you to do?",
                options: [
                    "Store messages permanently",
                    "Write custom log entries to message processing log for debugging and monitoring",
                    "Create message backups",
                    "Generate audit reports"
                ],
                correct: 1,
                explanation: "The messageLog object allows writing custom log entries to the Message Processing Log (MPL), useful for debugging, tracking processing steps, and providing operational visibility.",
                difficulty: "medium"
            },
            {
                question: "What happens if you don't define a 'Correlation Expression' in an Aggregator?",
                options: [
                    "All messages are aggregated together",
                    "Aggregation fails with error",
                    "Each message is processed separately",
                    "Random aggregation occurs"
                ],
                correct: 1,
                explanation: "Without a Correlation Expression, the Aggregator cannot determine which messages belong together for aggregation, resulting in an error. The correlation expression groups related messages for aggregation.",
                difficulty: "medium"
            },
            {
                question: "You have an integration that processes employee data. The source sends 'DateOfBirth' in format 'DD-MM-YYYY' but target needs 'MM/DD/YYYY'. Using Groovy, you parse the date but get errors for invalid dates like '32-13-2024'. What programming principle should you implement?",
                options: [
                    "Ignore invalid dates",
                    "Implement try-catch exception handling with validation before parsing",
                    "Always assume dates are valid",
                    "Convert all dates to Unix timestamps"
                ],
                correct: 1,
                explanation: "Defensive programming with try-catch handles invalid data gracefully. Pre-validation (checking date components are in valid ranges) prevents errors, and exception handling allows logging or routing invalid records for manual review.",
                difficulty: "medium"
            }
        ],
        60: // Section 2: Message Processing - Questions 31-60
        // Mix of difficulty: ~20% Easy, ~50% Medium, ~30% Hard
        // Enhanced focus on case-based scenarios and diverse topics
        
        [
            {
                question: "A retail company sends you daily sales files at 11 PM containing transactions from all stores. The file has 50,000 records. However, 5% of records have malformed data (missing required fields). You need to process valid records immediately and send error records to a review queue. What's the optimal message processing design?",
                options: [
                    "Process all records, let target system reject invalid ones",
                    "Use Filter to drop invalid records, process rest normally",
                    "Use Content-Based Router with validation logic to separate valid/invalid records to different paths",
                    "Use exception handling to catch errors for each record"
                ],
                correct: 2,
                explanation: "Content-Based Router with validation logic (checking for required fields) efficiently separates valid and invalid records at the beginning. Valid records continue normal processing while invalid records route to an error handling path (queue/file) for review, preventing data loss and enabling business continuity.",
                difficulty: "medium"
            },
            {
                question: "What is the purpose of the 'DOM Parser' in XML processing?",
                options: [
                    "To compress XML documents",
                    "To load entire XML document into memory as a tree structure for navigation and manipulation",
                    "To stream XML data",
                    "To validate XML syntax only"
                ],
                correct: 1,
                explanation: "DOM (Document Object Model) Parser loads the complete XML document into memory as a tree structure, allowing random access and manipulation of any element. This is memory-intensive but provides full document access.",
                difficulty: "easy"
            },
            {
                question: "Your integration processes insurance claims. Claims under $5,000 auto-approve, $5,000-$50,000 need manager approval, and over $50,000 need director approval. You receive 1,000 claims/day with a 70-20-10% distribution. How should you architect the message routing?",
                options: [
                    "Single sequential processor checking all conditions",
                    "Content-Based Router with three routes based on claim amount ranges",
                    "Three separate integration flows triggered by amount",
                    "Process all identically, let target system route"
                ],
                correct: 1,
                explanation: "Content-Based Router with three conditional routes based on claim amount efficiently separates processing paths. Each route can have specific logic (auto-approve, manager queue, director queue), optimizing processing and making the flow clear and maintainable.",
                difficulty: "medium"
            },
            {
                question: "In SAX parsing, what is the primary advantage over DOM parsing?",
                options: [
                    "Faster processing speed",
                    "Memory efficiency - processes XML sequentially without loading entire document",
                    "Better error handling",
                    "Supports more XML features"
                ],
                correct: 1,
                explanation: "SAX (Simple API for XML) is event-driven and processes XML sequentially, never loading the entire document into memory. This makes it ideal for large XML files where memory is constrained, though it only allows forward-only reading.",
                difficulty: "easy"
            },
            {
                question: "You're integrating with a supplier who sends product catalog updates. Updates arrive as delta files (only changed products) in XML format every hour. Your system needs the complete current catalog state. You receive 200 updates/day affecting 5,000 products total. What processing strategy maintains accurate state?",
                options: [
                    "Process each delta independently, send to target",
                    "Store complete catalog in Data Store, apply each delta update to stored state, send updated catalog",
                    "Aggregate all daily deltas, send once at day end",
                    "Request full catalog from supplier each time"
                ],
                correct: 1,
                explanation: "Maintaining catalog state in Data Store allows applying delta updates incrementally. Each delta modifies the stored state (add/update/delete products), ensuring you always have current complete catalog without requiring full refreshes, optimizing network and processing resources.",
                difficulty: "hard"
            },
            {
                question: "What does 'Message Payload' refer to in integration contexts?",
                options: [
                    "The size of the message",
                    "The actual business data content of the message being transmitted",
                    "The message headers",
                    "The transmission cost"
                ],
                correct: 1,
                explanation: "Message Payload is the actual business data content (body) being transmitted, as opposed to metadata like headers, properties, or transmission protocol information.",
                difficulty: "easy"
            },
            {
                question: "In a Groovy script, you need to parse a JSON message body and extract the 'orderId'. Which approach is correct?",
                options: [
                    "def orderId = message.body.orderId",
                    "import groovy.json.JsonSlurper; def json = new JsonSlurper().parseText(message.getBody(String)); def orderId = json.orderId",
                    "def orderId = message.getProperty('orderId')",
                    "def orderId = JSONPath.parse(message.body)"
                ],
                correct: 1,
                explanation: "JsonSlurper is Groovy's built-in JSON parser. You must: 1) Import it, 2) Get message body as String, 3) Parse with JsonSlurper, 4) Access properties from resulting object. This is the standard Groovy approach for JSON processing.",
                difficulty: "medium"
            },
            {
                question: "A hospital system sends you patient admission data every 15 minutes. Due to system limitations, they can only send data for patients admitted in the last 15 minutes, but occasionally the system is down for up to 2 hours. When it recovers, it sends all missed data in one large file. Your processing times: normal load (50 patients) = 30 seconds, recovery load (400 patients) = 4 minutes. What problem will occur without proper design?",
                options: [
                    "No issues, system handles automatically",
                    "Timeout errors as processing exceeds default 60-second timeout limits",
                    "Data duplication",
                    "Messages arrive out of order"
                ],
                correct: 1,
                explanation: "Default HTTP timeouts (typically 60 seconds) will cause timeout errors when processing takes 4 minutes during recovery scenarios. Solution: increase timeout configuration, implement async processing with acknowledgment, or use batch splitting with persistence to process large volumes without timeout constraints.",
                difficulty: "hard"
            },
            {
                question: "What is 'Message Normalization' in integration patterns?",
                options: [
                    "Making messages smaller",
                    "Converting messages from various formats into a common canonical format",
                    "Standardizing message timestamps",
                    "Removing duplicate messages"
                ],
                correct: 1,
                explanation: "Message Normalization transforms messages from different source systems (with varying formats and structures) into a single, standardized canonical format, simplifying downstream processing and reducing transformation complexity.",
                difficulty: "easy"
            },
            {
                question: "You're processing employee payroll files. The file contains 3 sections: permanent employees (5,000 records), contractors (2,000 records), and interns (500 records). Each section needs different processing logic and goes to different target systems. The file format is CSV with a 'EmployeeType' column. What's the most efficient processing approach?",
                options: [
                    "Split all records, use Content-Based Router on each to direct to appropriate path",
                    "Use three separate integration flows reading the same file",
                    "Process all records identically",
                    "Pre-split file externally before sending to CPI"
                ],
                correct: 0,
                explanation: "Splitting the file into individual records then using Content-Based Router to examine 'EmployeeType' efficiently directs each record to its appropriate processing path. This single-pass approach is more efficient than multiple file reads and easier to maintain than external pre-processing.",
                difficulty: "medium"
            },
            {
                question: "What is the purpose of 'Character Set Conversion' in message processing?",
                options: [
                    "Converting between different character encodings (e.g., ISO-8859-1 to UTF-8)",
                    "Converting characters to numbers",
                    "Removing special characters",
                    "Translating to different languages"
                ],
                correct: 0,
                explanation: "Character Set Conversion transforms text data from one character encoding to another, essential when integrating systems using different encodings to prevent character corruption or data loss, especially for international characters.",
                difficulty: "easy"
            },
            {
                question: "Your integration receives XML purchase orders where the quantity field can be: '100', '100.00', '100.0', or '1.00E+02' (scientific notation). All represent the same value. When you compare quantities for business logic, what issue arises and how do you solve it?",
                options: [
                    "No issue, XML handles this automatically",
                    "String comparison treats them as different; convert to numeric type (Integer/BigDecimal) before comparison",
                    "Use XPath to standardize format first",
                    "Different formats cannot be compared"
                ],
                correct: 1,
                explanation: "String comparison treats '100', '100.00', and '1.00E+02' as different values. Converting to numeric types (Integer for whole numbers, BigDecimal for precision) normalizes the representation, allowing accurate mathematical comparison regardless of string format.",
                difficulty: "medium"
            },
            {
                question: "What is 'XML Namespace' and why is it important in message processing?",
                options: [
                    "A storage location for XML files",
                    "A mechanism to avoid element name conflicts by providing unique identifiers for XML elements",
                    "A compression technique",
                    "A validation method"
                ],
                correct: 1,
                explanation: "XML Namespaces use URIs to uniquely identify element names, preventing conflicts when combining XML from different sources. They're crucial in message processing for correct XPath queries and XSLT transformations on namespaced documents.",
                difficulty: "easy"
            },
            {
                question: "A logistics company sends you shipment tracking updates. Updates for the same shipment can arrive multiple times as the package moves through different checkpoints. Each update has a timestamp and checkpoint location. You need to maintain only the latest status for each shipment. Your system receives 10,000 updates/hour with 2,000 unique shipments. What's the optimal processing pattern?",
                options: [
                    "Process each update independently, let target system handle duplicates",
                    "Use Data Store with shipment ID as key, only update if incoming timestamp is newer than stored",
                    "Aggregate all updates, process only the last one for each shipment",
                    "Use Idempotent Repository to block all duplicates"
                ],
                correct: 1,
                explanation: "Data Store with shipment ID as key enables temporal idempotency - store each shipment's latest state, comparing timestamps before updating. This ensures you maintain current status while discarding outdated updates, without blocking legitimate status progressions.",
                difficulty: "hard"
            },
            {
                question: "In XSLT transformation, what does 'xsl:for-each' do?",
                options: [
                    "Loops through selected nodes and applies template to each",
                    "Counts elements in the document",
                    "Validates each element",
                    "Sorts elements"
                ],
                correct: 0,
                explanation: "xsl:for-each iterates through a node set (selected by XPath), applying the template instructions within its body to each node, similar to a for-each loop in programming languages.",
                difficulty: "easy"
            },
            {
                question: "You're transforming medical records from HL7 format to FHIR JSON. A single HL7 message can contain multiple patient observations (temperature, blood pressure, heart rate). Each observation must become a separate FHIR resource. The HL7 message has 1-50 observations. What transformation approach handles this cardinality change correctly?",
                options: [
                    "Simple one-to-one mapping transformation",
                    "Use XSLT with for-each to iterate observations, creating multiple FHIR resources, then wrap in array",
                    "Split HL7 message first, then transform each segment",
                    "Cannot handle cardinality changes in transformation"
                ],
                correct: 1,
                explanation: "XSLT with for-each loops through observation segments in the HL7 message, creating individual FHIR resource JSON objects for each. The template wraps all resources in a JSON array, correctly handling the one-to-many cardinality transformation.",
                difficulty: "medium"
            },
            {
                question: "What is the difference between 'Deep Copy' and 'Shallow Copy' when handling message objects in Groovy?",
                options: [
                    "Deep copy is faster",
                    "Deep copy creates independent clone including nested objects; shallow copy only copies top-level references",
                    "Shallow copy uses less memory",
                    "They are identical in Groovy"
                ],
                correct: 1,
                explanation: "Deep copy recursively clones all nested objects creating completely independent copies, while shallow copy only copies top-level object references. Modifications to nested objects in shallow copies affect the original, but not in deep copies.",
                difficulty: "medium"
            },
            {
                question: "Your integration processes real estate listings. Listings have a 'Price' field that comes in various formats: '$1,250,000', '1250000', '1.25M', '1,250,000 USD'. You need to extract numeric value for comparison logic (e.g., filter luxury properties > $1M). What's the most robust parsing approach?",
                options: [
                    "Use simple string removal of '$' and ','",
                    "Use regex to extract numbers and handle abbreviations (M=million, K=thousand), convert to standardized numeric",
                    "Reject non-standard formats",
                    "Store as string, compare strings"
                ],
                correct: 1,
                explanation: "Robust parsing requires: 1) Regex to extract numeric portions, 2) Logic to expand abbreviations (M=×1,000,000, K=×1,000), 3) Remove currency symbols and delimiters, 4) Convert to BigDecimal for accurate comparison. This handles all format variations reliably.",
                difficulty: "medium"
            },
            {
                question: "What is 'Message Compression' used for in integration?",
                options: [
                    "Reducing message size for faster transmission and storage",
                    "Encrypting message content",
                    "Validating message structure",
                    "Converting message formats"
                ],
                correct: 0,
                explanation: "Message Compression reduces payload size using algorithms like GZIP, reducing network bandwidth usage and transmission time, especially beneficial for large messages or bandwidth-constrained environments.",
                difficulty: "easy"
            },
            {
                question: "A financial services company processes loan applications. Applications go through 5 sequential validation steps (credit check, income verification, employment verification, debt ratio calculation, fraud check). Each step takes 2-5 seconds. If any step fails, processing should stop immediately and return specific rejection reason. You receive 500 applications/hour. What's the optimal processing design?",
                options: [
                    "Parallel execution of all validations",
                    "Sequential processing with exception handling at each step to short-circuit on failure",
                    "Batch all validations, execute together",
                    "Execute all validations regardless of failures"
                ],
                correct: 1,
                explanation: "Sequential processing with exception handling after each validation step enables fail-fast behavior - immediately stopping and returning specific rejection reason when any validation fails. This is more efficient than running unnecessary validations and provides better user experience with specific failure reasons.",
                difficulty: "medium"
            },
            {
                question: "In Groovy scripts, what does 'def response = message.getBody(java.io.InputStream)' do?",
                options: [
                    "Converts message to string",
                    "Gets message body as an input stream for memory-efficient processing of large payloads",
                    "Downloads message from internet",
                    "Creates a backup stream"
                ],
                correct: 1,
                explanation: "Getting the body as InputStream allows processing large payloads in a streaming fashion without loading entire content into memory, essential for handling large files or when memory is constrained.",
                difficulty: "medium"
            },
            {
                question: "What is 'XML Schema (XSD)' used for?",
                options: [
                    "Compressing XML files",
                    "Defining structure, data types, and constraints for XML documents to enable validation",
                    "Encrypting XML content",
                    "Converting XML to other formats"
                ],
                correct: 1,
                explanation: "XML Schema (XSD) formally defines the structure, elements, attributes, data types, and constraints of XML documents, enabling validation to ensure messages conform to expected structure and business rules.",
                difficulty: "easy"
            },
            {
                question: "You're processing IoT sensor data from 5,000 devices. Each device sends readings every 10 seconds (JSON format). Readings include temperature, humidity, and battery level. You need to: 1) Filter out readings where battery < 10% (send alert), 2) Store all readings for analysis, 3) Send only temperature readings > 30°C to cooling system. This generates 1.8M messages/hour. What architecture handles this efficiently?",
                options: [
                    "Single sequential flow processing each message through all logic",
                    "Use Multicast to copy message to three parallel paths: battery alert filter, storage, temperature filter",
                    "Three separate integration flows reading from same source",
                    "Process sequentially, check each condition in order"
                ],
                correct: 1,
                explanation: "Multicast creates three parallel processing paths from a single incoming message: Path 1 filters low battery and sends alerts, Path 2 stores all readings, Path 3 filters high temperature for cooling system. This parallel processing is efficient, clear, and maintains single message ingestion.",
                difficulty: "hard"
            },
            {
                question: "What does 'Boundary Element' mean in CSV to XML conversion?",
                options: [
                    "The first and last records in CSV",
                    "The XML element name that wraps each CSV row in the output XML",
                    "The CSV delimiter character",
                    "The XML document boundary"
                ],
                correct: 1,
                explanation: "Boundary Element defines the XML element name that will contain/wrap each CSV record when converted to XML. For example, if boundary element is 'Employee', each CSV row becomes an <Employee> element.",
                difficulty: "medium"
            },
            {
                question: "You're integrating invoice data. Source system sends 'InvoiceDate' field but 3% of records have future dates due to data entry errors. These shouldn't be processed as they're invalid. You need to filter these out. What's the best validation approach?",
                options: [
                    "Use Filter component with date comparison: InvoiceDate <= CurrentDate",
                    "Process all invoices, let accounting system reject invalid ones",
                    "Use Groovy script to parse date and compare with current date, set property for routing",
                    "Ignore the issue"
                ],
                correct: 2,
                explanation: "Groovy script provides robust date parsing with error handling, proper date comparison considering timezones, and flexibility to set a property (e.g., 'isValid') that can be used by subsequent Content-Based Router. This is more maintainable and provides better error handling than Filter's limited expression capabilities.",
                difficulty: "medium"
            },
            {
                question: "What is 'JSON Schema' used for?",
                options: [
                    "Compressing JSON files",
                    "Defining structure and validation rules for JSON documents",
                    "Converting JSON to XML",
                    "Encrypting JSON data"
                ],
                correct: 1,
                explanation: "JSON Schema defines the structure, data types, required fields, and validation rules for JSON documents, enabling validation similar to XSD for XML, ensuring data quality and conformance to expected format.",
                difficulty: "easy"
            },
            {
                question: "An e-commerce platform sends order data where product prices include various currencies: 'USD 100.50', '€50.25', '£75.00', '¥10000'. Your target system requires all prices in USD as numeric values with standard conversion rates (EUR: 1.1, GBP: 1.25, JPY: 0.0091). What transformation complexity must you handle?",
                options: [
                    "Simple numeric conversion",
                    "Extract currency, extract amount, apply conversion rate, handle decimal precision",
                    "Store as-is, let target system convert",
                    "Reject non-USD prices"
                ],
                correct: 1,
                explanation: "Complex transformation requires: 1) Regex to extract currency symbol/code, 2) Extract numeric amount, 3) Lookup conversion rate, 4) Calculate converted value, 5) Handle decimal precision (2 decimal places for USD), 6) Handle edge cases (unknown currencies). Best implemented in Groovy for robustness.",
                difficulty: "hard"
            },
            {
                question: "In XSLT, what does 'xsl:value-of' do?",
                options: [
                    "Validates values",
                    "Extracts and outputs the text content of selected nodes",
                    "Counts values",
                    "Sorts values"
                ],
                correct: 1,
                explanation: "xsl:value-of evaluates an XPath expression and outputs the text content of the selected node(s) to the result document, commonly used to extract and insert specific values during transformation.",
                difficulty: "easy"
            },
            {
                question: "You're processing student enrollment data. The source sends a flat CSV with one row per course enrollment: StudentID, StudentName, CourseID, CourseName, Grade. One student can have multiple enrollments. You need to create JSON output with nested structure: student info at top level, array of courses nested within. The CSV has 10,000 rows representing 2,000 students. What processing approach achieves this structure?",
                options: [
                    "Simple CSV to JSON conversion",
                    "Group/aggregate by StudentID, collect course arrays per student using Groovy script",
                    "Keep flat structure, let target system restructure",
                    "Use XSLT transformation"
                ],
                correct: 1,
                explanation: "Groovy script can: 1) Parse CSV, 2) Group records by StudentID using Map data structure, 3) Build nested JSON with student details at top and course array nested, 4) Handle collection aggregation. This requires programmatic logic beyond simple converters, making Groovy the right choice.",
                difficulty: "hard"
            },
            {
                question: "What is 'Message Deduplication' in integration?",
                options: [
                    "Removing duplicate fields from messages",
                    "Identifying and eliminating duplicate messages to ensure each unique message is processed only once",
                    "Compressing messages",
                    "Merging similar messages"
                ],
                correct: 1,
                explanation: "Message Deduplication identifies duplicate messages (using message IDs, content hash, or business keys) and ensures each unique message is processed only once, preventing duplicate processing and maintaining data integrity.",
                difficulty: "easy"
            },
            // Section 2: Message Processing - Questions 61-90
// Focus on Theoretical and Practical questions
// Mix of difficulty: ~15% Easy, ~55% Medium, ~30% Hard
    {
        question: "What is the theoretical time complexity of XPath evaluation on a DOM tree with 'n' nodes when searching for a specific element by ID?",
        options: [
            "O(1) - constant time",
            "O(log n) - logarithmic time",
            "O(n) - linear time",
            "O(n²) - quadratic time"
        ],
        correct: 2,
        explanation: "Without indexing, XPath must potentially traverse all n nodes in worst case, giving O(n) complexity. However, some XPath processors with ID indexing can achieve O(1) lookup for ID-based searches. General path traversals are O(n).",
        difficulty: "hard"
    },
    {
        question: "In Groovy, what is the correct way to set a message header named 'ProcessedTimestamp' with the current system time?",
        options: [
            "message.headers.ProcessedTimestamp = new Date()",
            "message.setHeader('ProcessedTimestamp', new Date().toString())",
            "message.addHeader('ProcessedTimestamp', System.currentTimeMillis())",
            "headers.put('ProcessedTimestamp', Date.now())"
        ],
        correct: 1,
        explanation: "The correct Camel API method is message.setHeader(headerName, value). Converting Date to String is good practice for header values. message.setHeader() is the standard method used in SAP CPI Groovy scripts.",
        difficulty: "medium"
    },
    {
        question: "What theoretical principle does 'message immutability' in functional programming paradigms provide for integration flows?",
        options: [
            "Faster processing",
            "Thread-safety and predictable behavior by preventing unintended side effects",
            "Smaller message sizes",
            "Better error messages"
        ],
        correct: 1,
        explanation: "Message immutability ensures that once created, messages cannot be modified. This provides thread-safety in parallel processing, makes debugging easier (state doesn't change unexpectedly), and prevents side effects where one operation unexpectedly affects another.",
        difficulty: "medium"
    },
    {
        question: "In XML processing, what is the practical difference between using '//' and '/' in XPath expressions?",
        options: [
            "// is faster than /",
            "/ searches from root only; // searches at any depth in the document",
            "// is for attributes, / is for elements",
            "They are identical in function"
        ],
        correct: 1,
        explanation: "Single slash (/) selects from the root or current node's immediate children. Double slash (//) selects nodes at any depth in the document tree, making it more flexible but potentially slower as it searches the entire tree.",
        difficulty: "easy"
    },
    {
        question: "When processing messages, what is 'idempotency' and why is it theoretically important?",
        options: [
            "Processing messages faster",
            "Ensuring that processing the same message multiple times produces the same result as processing it once",
            "Validating message content",
            "Compressing duplicate data"
        ],
        correct: 1,
        explanation: "Idempotency ensures that repeated processing of the same message (due to retries, network issues, etc.) produces the same outcome as single processing, preventing duplicate records, double payments, or inconsistent state.",
        difficulty: "medium"
    },
    {
        question: "In a Groovy script, how do you iterate through all message headers and print them to the message log?",
        options: [
            "headers.forEach(h -> messageLog.info(h))",
            "message.getHeaders().each { key, value -> messageLog.addInfo(\"${key}: ${value}\") }",
            "for(header in headers) { log(header) }",
            "message.headers.print()"
        ],
        correct: 1,
        explanation: "Groovy's .each{} method iterates through map entries. message.getHeaders() returns a Map, and messageLog.addInfo() writes to the MPL. The syntax messageLog.addInfo(\"${key}: ${value}\") uses Groovy string interpolation.",
        difficulty: "medium"
    },
    {
        question: "What is the theoretical maximum throughput limit for a synchronous request-response integration pattern?",
        options: [
            "Unlimited with proper hardware",
            "Limited by: 1 / (Request Processing Time + Network Latency)",
            "Depends only on network bandwidth",
            "Limited by message size only"
        ],
        correct: 1,
        explanation: "In synchronous patterns, you must wait for response before sending the next request. Maximum throughput = 1 / (processing time + latency). For example, 100ms processing + 50ms latency = 150ms total = max ~6.67 requests/second per thread.",
        difficulty: "hard"
    },
    {
        question: "In XSLT, what does the 'xsl:template match' attribute specify?",
        options: [
            "The output format",
            "The XPath pattern that determines which nodes this template will process",
            "The template execution order",
            "The template name"
        ],
        correct: 1,
        explanation: "The match attribute contains an XPath pattern that specifies which nodes in the source document this template should be applied to. When the XSLT processor encounters matching nodes, it executes this template's transformation logic.",
        difficulty: "easy"
    },
    {
        question: "What is 'XML Canonicalization' and why is it used in message processing?",
        options: [
            "Compressing XML documents",
            "Converting XML to a standardized form for consistent comparison, hashing, and digital signatures",
            "Validating XML syntax",
            "Removing XML namespaces"
        ],
        correct: 1,
        explanation: "XML Canonicalization (C14N) transforms XML into a standard form by normalizing whitespace, attribute order, namespace declarations, etc. This ensures identical logical content produces identical byte representation for signatures, hashing, and comparison.",
        difficulty: "medium"
    },
    {
        question: "In Groovy, what is the correct method to convert a JSON string stored in a property 'jsonData' to a Map object?",
        options: [
            "def map = JSON.parse(message.getProperty('jsonData'))",
            "import groovy.json.JsonSlurper; def map = new JsonSlurper().parseText(message.getProperty('jsonData'))",
            "def map = message.getProperty('jsonData').toMap()",
            "def map = JsonParser.parse(message.getProperty('jsonData'))"
        ],
        correct: 1,
        explanation: "JsonSlurper is Groovy's standard JSON parser. Import it, create instance, use parseText() for JSON strings. The result is a Groovy Map/List structure that can be navigated and manipulated programmatically.",
        difficulty: "medium"
    },
    {
        question: "What theoretical principle does 'loose coupling' provide in message transformation design?",
        options: [
            "Faster processing speed",
            "Independence between systems - changes in one system don't require changes in others",
            "Smaller message sizes",
            "Better security"
        ],
        correct: 1,
        explanation: "Loose coupling through canonical message formats means source and target systems don't directly depend on each other's formats. The integration layer handles transformation, so changes in one system only affect its transformation, not the entire integration chain.",
        difficulty: "medium"
    },
    {
        question: "In XPath, what does the expression '//Product[@category=\"Electronics\"]/Price[. > 100]' select?",
        options: [
            "All products with prices",
            "Price elements greater than 100 for Products with category attribute 'Electronics'",
            "All products in Electronics category",
            "Products costing exactly 100"
        ],
        correct: 1,
        explanation: "This expression: 1) Finds Product elements anywhere (//Product) 2) with category attribute = 'Electronics' ([@category=\"Electronics\"]) 3) then selects their Price child elements 4) where the price value (.) is greater than 100.",
        difficulty: "medium"
    },
    {
        question: "What is the practical purpose of 'namespace prefixes' in XML processing?",
        options: [
            "To make XML files smaller",
            "To provide short aliases for namespace URIs, making XPath and XML more readable",
            "To encrypt namespace information",
            "To validate XML structure"
        ],
        correct: 1,
        explanation: "Namespace prefixes (like 'soap' for SOAP namespace) are short aliases for long namespace URIs. They make XML more readable and XPath expressions more concise while maintaining uniqueness through the full URI they represent.",
        difficulty: "easy"
    },
    {
        question: "In message processing theory, what is the 'Claim Check' pattern used for?",
        options: [
            "Validating message claims",
            "Storing large message payload separately and passing only a reference token for retrieval",
            "Checking message authenticity",
            "Verifying sender identity"
        ],
        correct: 1,
        explanation: "Claim Check pattern stores large payloads in a data store and passes only a small reference ID through the integration flow. The full payload is retrieved when needed, reducing memory usage and improving performance for large messages.",
        difficulty: "medium"
    },
    {
        question: "How do you access a nested JSON property 'customer.address.zipCode' in a Groovy script after parsing JSON?",
        options: [
            "def zipCode = json.customer.address.zipCode",
            "def zipCode = json['customer']['address']['zipCode']",
            "def zipCode = json.get('customer.address.zipCode')",
            "Both A and B are correct"
        ],
        correct: 3,
        explanation: "Groovy allows both dot notation (json.customer.address.zipCode) and bracket notation (json['customer']['address']['zipCode']) for accessing nested Map properties. Both work identically; dot notation is more readable while bracket notation is useful for dynamic keys.",
        difficulty: "medium"
    },
    {
        question: "What is 'UTF-8 BOM' (Byte Order Mark) and what practical issue can it cause?",
        options: [
            "A security feature",
            "A 3-byte sequence at file start that can break JSON/XML parsers expecting pure UTF-8",
            "A compression marker",
            "An encryption header"
        ],
        correct: 1,
        explanation: "UTF-8 BOM (bytes EF BB BF) can appear at the start of UTF-8 files. Many parsers don't expect it and fail with 'invalid character' errors. Practical solution: detect and strip BOM before parsing, or use BOM-aware parsers.",
        difficulty: "medium"
    },
    {
        question: "In XSLT transformation, what does 'xsl:apply-templates' do?",
        options: [
            "Applies formatting to text",
            "Recursively processes child nodes by finding and applying matching templates",
            "Validates templates",
            "Creates new templates"
        ],
        correct: 1,
        explanation: "xsl:apply-templates continues the transformation process by finding and applying templates that match the selected nodes (or child nodes if no select attribute). This enables recursive, modular template processing.",
        difficulty: "medium"
    },
    {
        question: "What theoretical advantage does 'streaming' provide over 'batch' processing for real-time requirements?",
        options: [
            "Lower latency - messages processed immediately as they arrive",
            "Better throughput",
            "Simpler implementation",
            "Less memory usage"
        ],
        correct: 0,
        explanation: "Streaming processes messages immediately upon arrival, providing low latency and real-time responsiveness. Batch processing groups messages for efficiency but adds latency waiting for batch completion. Streaming is ideal for time-sensitive scenarios.",
        difficulty: "medium"
    },
    {
        question: "In Groovy, what is the correct way to create a new XML element and add it to an existing XML document?",
        options: [
            "Use XmlSlurper to parse, navigate, append using leftShift (<<) or plus (+) operators",
            "xml.createElement('NewElement')",
            "document.addElement('NewElement')",
            "XmlParser.insert('NewElement')"
        ],
        correct: 0,
        explanation: "XmlSlurper parses XML into a modifiable structure. Use << (leftShift) to append children: parent << new Node(null, 'elementName', [attribute: 'value'], 'text'). Alternatively, use + operator for concatenation.",
        difficulty: "hard"
    },
    {
        question: "What is 'Base64 encoding' used for in message processing?",
        options: [
            "Compressing data",
            "Converting binary data to ASCII text format for safe transmission through text-based protocols",
            "Encrypting data",
            "Validating data"
        ],
        correct: 1,
        explanation: "Base64 encodes binary data (images, PDFs, etc.) into ASCII characters, allowing transmission through systems that only handle text (email, XML, JSON). It increases size by ~33% but ensures safe transmission without data corruption.",
        difficulty: "easy"
    },
    {
        question: "In XPath, what is the difference between 'text()' and 'string()' functions?",
        options: [
            "They are identical",
            "text() selects text nodes; string() converts entire element content to string",
            "text() is faster",
            "string() validates text"
        ],
        correct: 1,
        explanation: "text() selects text node children (can return multiple nodes), while string() converts the entire element including all descendant text to a single concatenated string. Example: <a>hello<b>world</b></a> - text()='hello', string()='helloworld'.",
        difficulty: "medium"
    },
    {
        question: "What theoretical benefit does 'schema validation' provide before message transformation?",
        options: [
            "Faster transformation",
            "Early failure detection prevents wasted processing on invalid messages",
            "Automatic transformation",
            "Better compression"
        ],
        correct: 1,
        explanation: "Validating messages against schema early (fail-fast principle) catches structural errors before expensive transformation or business logic processing. This saves resources, provides clear error messages, and prevents corrupted data from propagating.",
        difficulty: "medium"
    },
    {
        question: "In a Groovy script, how do you properly handle null values when accessing nested JSON properties?",
        options: [
            "Use try-catch blocks around each access",
            "Use safe navigation operator (?.) : json?.customer?.address?.zipCode",
            "Check each level with if statements",
            "Groovy automatically handles nulls"
        ],
        correct: 1,
        explanation: "Groovy's safe navigation operator (?.) returns null if any level in the chain is null, preventing NullPointerException. This is more concise than nested if-checks. Example: json?.customer?.address?.zipCode returns null safely if customer, address, or zipCode is missing.",
        difficulty: "medium"
    },
    {
        question: "What is 'XML External Entity (XXE)' and why is it a concern in XML processing?",
        options: [
            "A performance optimization",
            "A security vulnerability where external entities can be used to read files or cause DoS attacks",
            "A validation technique",
            "A transformation method"
        ],
        correct: 1,
        explanation: "XXE attacks exploit XML parsers that process external entity declarations, potentially reading local files, accessing internal networks, or causing denial-of-service. Mitigation: disable external entity processing in XML parsers used for untrusted input.",
        difficulty: "hard"
    },
    {
        question: "In XSLT, what does 'xsl:choose' provide that 'xsl:if' does not?",
        options: [
            "Better performance",
            "Multiple conditional branches (like switch/case) vs single condition (like if)",
            "Loops",
            "Variable declarations"
        ],
        correct: 1,
        explanation: "xsl:if provides single condition (true/false). xsl:choose provides multiple conditional branches (xsl:when for conditions, xsl:otherwise for default), similar to switch-case or if-else-if chains in programming languages.",
        difficulty: "medium"
    },
    {
        question: "What is the practical purpose of 'CDATA sections' in XML?",
        options: [
            "To compress data",
            "To include text containing XML special characters (<, >, &) without escaping",
            "To encrypt data",
            "To validate content"
        ],
        correct: 1,
        explanation: "CDATA sections (<![CDATA[...]]>) allow including text with XML special characters literally without escaping. Content inside CDATA is not parsed as XML markup. Useful for embedding code samples, JSON, or other data containing <, >, & characters.",
        difficulty: "easy"
    },
    {
        question: "In message processing theory, what is 'message ordering' and when is it critical?",
        options: [
            "Alphabetically sorting messages",
            "Ensuring messages are processed in the exact sequence they were sent, critical for dependent transactions",
            "Organizing message storage",
            "Prioritizing important messages"
        ],
        correct: 1,
        explanation: "Message ordering ensures sequential processing in send order, critical when messages are dependent (e.g., Create Customer before Create Order). Without ordering, race conditions can occur where Order arrives before Customer, causing failures.",
        difficulty: "medium"
    },
    {
        question: "How do you convert a Groovy Map object to JSON string?",
        options: [
            "map.toJson()",
            "import groovy.json.JsonOutput; def jsonString = JsonOutput.toJson(map)",
            "JSON.stringify(map)",
            "new JsonBuilder(map).toString()"
        ],
        correct: 1,
        explanation: "JsonOutput.toJson() is the standard Groovy method to convert Maps/Lists to JSON strings. Import groovy.json.JsonOutput, then use JsonOutput.toJson(object). For pretty-printing, use JsonOutput.prettyPrint(JsonOutput.toJson(object)).",
        difficulty: "medium"
    },
    {
        question: "What is the theoretical 'CAP theorem' implication for distributed message processing systems?",
        options: [
            "You can have all three: Consistency, Availability, Partition tolerance",
            "You can only guarantee two of three: Consistency, Availability, Partition tolerance",
            "It only applies to databases, not messaging",
            "It's irrelevant for integration"
        ],
        correct: 1,
        explanation: "CAP theorem states distributed systems can only guarantee 2 of 3: Consistency (all nodes see same data), Availability (system responds to requests), Partition tolerance (works despite network splits). Message processing must choose trade-offs: CP (consistency over availability) or AP (availability over consistency).",
        difficulty: "hard"
    },
    {
        question: "In XPath predicates, what does the 'position()' function return?",
        options: [
            "The GPS coordinates",
            "The index position of the current node in the node set being processed",
            "The node's depth in the document",
            "The character position in text"
        ],
        correct: 1,
        explanation: "position() returns the current node's position (1-based index) in the node set. Example: //Product[position() < 5] selects first 4 Product elements. Often used with last() for selecting ranges.",
        difficulty: "medium"
    }

        ]
            // Add 60 questions for Section 2 here
        
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