import React, { useState, useRef } from 'react'

export const DownloadComp = ({items}) => {
    const popupRef = useRef()
    const inputRef = useRef();
    const [filetypes, setFiletypes] = useState(['csv','text','json'])
    const [togglePopup, setToggle] = useState(true)
    const [downloadFile, setFile] = useState()

    
function Download(state){
   
    let output;
    if (state === "json") {
        output = JSON.stringify(items);
    } else if (state === "csv"){
      // Prepare data:
      let contents = [];
      contents.push(items);
     
      output = makeCSV(contents);
    } else if (state === "text"){
      // Prepare data:
      output = '';
      items.forEach(item => {
          output += `${item}\n`
      });
    }
    const blob = new Blob([output]);
    const fileDownloadUrl = URL.createObjectURL(blob);
    setFile(fileDownloadUrl)
    console.log(inputRef.current.href)
    
    URL.revokeObjectURL(fileDownloadUrl);  // free up storage--no longer needed.
    setFile('')
    }   
  
  
    
    return(
        <div className="btn">
            Download
            {togglePopup&&(
                <div ref={popupRef} class="popup">
                <div class="inner">
                    {filetypes.map(type =>
                        <div onClick={()=>Download(type)}>{type}</div>
                        )}
                </div>
                <a className="hidden"
                ref={inputRef}
             href={downloadFile}
             
          >download it</a>
              </div>
            )}
        </div>
    )
}
const Popup = () => {


}
function makeCSV (content) {
    let csv = '';
  content.forEach(value => {
      value.forEach((item, i) => {
      let innerValue = item === null ? '' : item.toString();
      let result = innerValue.replace(/"/g, '""');
      if (result.search(/("|,|\n)/g) >= 0) {
        result = '"' + result + '"'
      }
      if (i > 0) {csv += ','}
      csv += result;
    })
      csv += '\n';
    })
  return csv
}