document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("commitForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const type = document.getElementById("type").value;
        const description = document.getElementById("description").value;
        const files = document.getElementById("files").value;

        fetch("/generate_commit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ type, description, files }),
        })
            .then((response) => response.json())
            .then((data) => {
                const resultDiv = document.getElementById("result");
                resultDiv.innerHTML = `<strong>Generated Commit Message:</strong> ${data.commit_message}`;
            });
    });
});
