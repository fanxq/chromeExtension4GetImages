let styles = `
.checkboxWrapper{
    position: absolute;
    bottom: 3px;
    right: 3px;
    margin: 0;
    padding: 0;
    z-index: 99;
}
.styledCheckbox {
    position: absolute;
    opacity: 0;
}
.styledCheckbox + label {
    position: relative;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
}
.styledCheckbox + label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: transparent;
    box-sizing: border-box;
    border: 1px solid #f35429;
}
.styledCheckbox:hover + label:before {
    border: 2px solid #f35429;
}

.styledCheckbox:checked + label:before {
    background: #f35429;
}
.styledCheckbox:disabled + label {
    color: #b8b8b8;
    cursor: auto;
}
.styledCheckbox:disabled + label:before {
    box-shadow: none;
    background: #ddd;
}
.styledCheckbox:checked + label:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
.downloadBtn{
    border: none;
    -webkit-appearance: none;
    background-color: #ff4081 !important;
    background-image: none;
    color: white;
    width: 80px;
    height: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
    vertical-align: middle;
}

.downloadBtn:disabled{
    background-color: #ffaac8;
    color: lightgray;
}

.imgDlg{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: white;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3);
}
.tips{
    position: absolute;
    padding: 10px 10px;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #ffffff;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3);
}
.container{
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #ffffff;
    overflow-y: auto;
    align-content: flex-start;
}

.imgWrapper{
    width: 32%;
    margin-left: 1%;
    margin-top: 1%;
    margin-right: 0;
    height: 120px;
    border: 1px solid #ccc;
    padding: 5px 0px;
    position: relative;
    box-sizing: border-box;
}
.imgWrapper img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.header{
    background-color: #007acc;
    margin: 0;
    box-sizing: border-box;
    padding: 10px 5px;
}
.footer{
    background-color: #007acc;
    margin: 0;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
    box-sizing: border-box;
}
.title{
    font-size:20px;
    font-weight:bold;
    color:#fff;
    user-select: none;
}
.closeBtn{
    float: right;
    font-size:20px;
    font-weight:bold;
    color:#fff;
    user-select: none;
}

.selectAllWrapper{
    position: relative;
    height: 100%;
    width: 100px;
}
.selectAll{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}`;
export default styles;