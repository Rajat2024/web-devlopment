function getBotResponse(input) {
    if (input == "I would like to login as a donor , how can i?") {
        return "Well, now click on donor button and fill your id and password then simply click on signin button.";
    } else if (input == "I would like to login as a consumer , how can i?") {
        return "Well, now click on consumer button and fill your id and password then simply click on signin button.";
    } else if (input == "How may i use your recommendation engine?") {
        return "You just have to reach on recommendation engine page and there you have to choose the items which you want to consume with their respective quantity.";
    }
    else if (input == "Why we use your service?") {
        return "Because we are providing fresh meals and fast service with high quality.";
    }
    else if (input == "If i want to review/compliment your website how can i do that?") {
        return "You can reach on home page of the website and can fill the feedback form.";
    }
    else if (input == "How this site will be able to solve real life problems?") {
        return "Here we are predicting the data cosumed or wastage on daily basis which will help others to analyse the food wastage and provide that food to needy ones and decrease the food wastage.";
    }
    else if (input == "") {
        return "";
    }


    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}