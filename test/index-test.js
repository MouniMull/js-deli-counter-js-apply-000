function takeANumber(currentLineArray, newPersonName){            var lineLength = currentLineArray.length;        var newArrayPosition = lineLength;        currentLineArray[newArrayPosition] = newPersonName;        var newLinePosition = lineLength+1;        var message = "Welcome, "+newPersonName+". You are number "+newLinePosition+" in line.";    return message;}function nowServing(currentLineArray){    if(currentLineArray.length>0){        var personBeingServed = currentLineArray[0];        for(var i=1;i<currentLineArray.length;i=i+1){                        currentLineArray[i-1] = currentLineArray[i];         }                currentLineArray.pop();                return "Currently serving "+personBeingServed;    }    else{        return "There is nobody waiting to be served!";    }}function currentLine(currentLineArray){    if(currentLineArray.length===0){        return "The line is currently empty.";    }    else{              var message = "The line is currently: ";        for(i=0; i<currentLineArray.length; i=i+1){                        var positionInLine = i+1;            if(i == currentLineArray.length-1){               message = message+ positionInLine+". "+currentLineArray[i];                           }            else{                message = message+ positionInLine+". "+currentLineArray[i]+", ";                                          }        }                return message;    }    }