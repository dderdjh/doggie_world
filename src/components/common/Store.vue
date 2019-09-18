<template>
    <div>
    <div class="s-head">
       <div class="area">
         <div class="btn">广州<div class="triangle"></div></div> 
        </div> 
       <div class="area">
         <div class="btn">资质<div class="triangle"></div></div> 
        </div> 
       <div class="area">
         <div class="btn">信誉<div class="triangle"></div></div> 
        </div> 
    </div>
    </div>
</template>
<style scoped>
    .s-head{
        display: flex;
        justify-content: space-around;
       border-bottom: 1px solid #ccc;
    }
    .btn{
        border:0px;
        background: none;
        line-height: 50px;
    }   
    .triangle{
        width:0;
        height:0;
        border-right:7px solid transparent;
        border-left:7px solid transparent;
        border-top:7px solid black;
        float: right;
        margin-top: 20px;
        margin-left: 3px
        
    }

</style>