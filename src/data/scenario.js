const scenarios = [
    {
        type: "Email",
        content: "Dear user, your account has been compromised! Click here to verify.",
        isPhishing: true,
        explanation: "The email uses an urgent tone to trick you into clicking a suspicious link."
    },
    {
        type: "Coupon",
        content: "Congratulations! You've won a free trip! Click here to claim your prize.",
        isPhishing: true,
        explanation: "Too-good-to-be-true offers often lead to phishing scams. Be cautious!"
    },
    {
        type: "Message",
        content: "Hey, here’s the document you needed. [secure-documents.com]",
        isPhishing: false
    }
    // Add more scenarios as needed
];