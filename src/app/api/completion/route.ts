import {generateText} from "ai";
import {openai} from "@ai-sdk/openai";

export async function POST(req: Request){
	try {
	const prompt = await req.json();

	// const prompt = "What is your name"

	console.log(prompt.prompt, '||| prompt')

	const {text} = await generateText({
		model: openai("gpt-4.1-nano"), 
		prompt: prompt.prompt,
	});

	return Response.json({text});
} 

catch(error) {
	console.log(error)
		return Response.json({error: "Failed to generate text"})
}
}

