
const getDate = (date:string)=>{

    if(date?.split(":").length !==2){
        return null;
    }
    const [hour, minute] = date.split(":");
    const hourNum = Number(hour);
    const minuteNum = Number(minute);
    if(
        isNaN(hourNum) || 
        isNaN(minuteNum)
    ){
        return null;
    }
    return {hour:hourNum, minute:minuteNum}
}


export const hasTimeError = (inTime:string, outTime:string)=>{
    const inTimeDate = getDate(inTime);
    const outTimeDate = getDate(outTime);
    
    if(!inTimeDate && !outTimeDate){
        return 'Error - Please use "hh:mm" format'
    }

    if(!inTimeDate || !outTimeDate){ // can submit even 1 date
        return '';
    }

    if(inTimeDate.hour>outTimeDate.hour ||
        inTimeDate.hour===outTimeDate.hour && inTimeDate.minute>=outTimeDate.minute){
        return 'Error - Please use "in" thats sooner than "Out"'
    }
    return '';
}