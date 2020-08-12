import moment = require("moment");

//period
export const PeriodOptions ={
    nullable: true, 
    defaultValue: "DL",
    description: "Receive an Enum Period and the default is DL", 
}

//Date startend
export const DateEndOptions ={
    nullable: true, 
    defaultValue: { date: moment().format('DD-MM-YYYYThh:mm:ss'), period: "DL" },
    description: `It receives the final date of which the information is displayed in format DD-MM-YYYYThh:mm:ss and 
    Receive an Enum Period and the default is DL
    and the default date is: ${moment().format('DD-MM-YYYYThh:mm:ss')} `
}

//Card id
export const CardIdIntOptions ={
    nullable: true, 
    defaultValue: "generalInt01",
    description: `represents the id of the card that you want to show and the default value is: generalInt01`, 
}
export const CardIdStringOptions ={
    nullable: true, 
    defaultValue: "generalString01",
    description: `represents the id of the card that you want to show and the default value is: generalString01`, 
}
export const CardIdValuePrevOptions ={
    nullable: true, 
    defaultValue: "generalValuePrev01",
    description: `represents the id of the card that you want to show and the default value is: generalValuePrev01`, 
}


//IsNull

export const IsNull = {
    nullable: true
}

