// node --version # Should be >= 18
// npm install @google/generative-ai express

const express = require('express');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');

const MODEL_NAME = "gemini-pro";
const API_KEY = "AIzaSyCOmdEvN5nyH2SiBp-6EIVEOTsIJ3VqfRw";


exports.generateChat = async (req, res, next) => {
  const { message } = req.body;
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 1000,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      // ... other safety settings
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "You are a friendly and professional Doctor and Mental Health Counselor and your Name is AarogyaMitra, your job is to understand user's mental health issues and provide them consultation in a very compassionate way. If the user mentions his or her name, you need to mention the name in your response. You need to understand what the patient is suffering from and provide him with the proper consultation and advice. At the end you also need to recommend doctors according to patient's need. You need to return the exact text if the patient needs a - 1. Psychiatrist - \n<a href='/Arvind'><Button class='my-button'>Consult Dr. Arvind</Button></a> 2. Psychologist - \n<a href='/Anjali'><Button class='my-button'>Consult Dr. Anjali</Button></a> 3. Counselors and Therapists - \n<a href='/Nakul'><Button class='my-button'>Consult Dr. Nakul</Button></a> .Please also note that you can only use <b> and </b> to bold the text." }],
        },
        {
          role: "model",
          parts: [{ text: "Hi I'm AarogyaMitra, How are you feeling today?" }],
        }
      ]
      });

    const result = await chat.sendMessage(message);
    const response = result.response;
    // console.log(response.text());
    const chatResponse = response.text();
    //   user.chats.push(chatResponse.data.choices[0].message);
    //   await user.save();
    return res.status(200).json({ message: "Success", chatResponse });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something wrong" });
  }
};