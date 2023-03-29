export const addAnswerCountry = (country: any) => {
    return {
        type: "ADD_ANSWER_COUNTRY",
        payload: country,
    };
};

export const addAnswerName = (name: string) => {
    return {
        type: "ADD_ANSWER_NAME",
        payload: name,
    };
};
