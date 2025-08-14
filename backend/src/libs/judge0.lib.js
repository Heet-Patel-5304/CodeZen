import axios from "axios"

export const getJudge0LanguageId = (language)=>{
    const languageMap = {
        "PYTHON":71,
        "JAVA":62,
        "JAVASCRIPT":63,
    }

    return languageMap[language.toUpperCase()]
}

export function getLanguageName(languageId){
    const LANGUAGE_NAMES = {
        74: "TypeScript",
        63: "JavaScript",
        71: "Python",
        62: "Java",
    }

    return LANGUAGE_NAMES[languageId] || "Unknown"
}

export const submitBatch = async ( submission ) => {
    
    const options = {
        method: 'POST',
        url: `${process.env.SUBMISSION_POST_URL}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.SULU_AUTH_TOKEN}`
        },
        data: {
            submissions: submission
        }
    }

    const { data } = await axios( options );

    return data;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const pollBatchResult = async ( tokens ) => {
    
    const options = {
        method: 'GET',
        url: `${process.env.SUBMISSION_GET_URL}`,
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.SULU_AUTH_TOKEN}`
        },
        params: {
            tokens: tokens.join(","),
            base64_encoded: false,
        }
    };

    while( true ){

        const { data } = await axios.request( options );
        const result = data.submissions;

        const isAllDone = result.every(
            (r) => r.status.id !== 1 && r.status.id !== 2
        )

        if (isAllDone) return result;

        await sleep(1000);
    }
}