export interface QuestionMc {
    "qid": number,
    "qtyp": string,
    "qtxt": string[],
    "qanswers": Answer[],
    "qcorrect": string,
    "qinfo": []
}

export interface Answer {
    "txt": string[],
    "correct": boolean
}

export interface Question {
  "qid": number,
  "qtyp": string,
  "qtxt": string[],
  "qanswers": Answer[],
  "qcorrect": string,
  "qinfo": []
}
