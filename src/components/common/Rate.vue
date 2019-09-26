<template>
  <div class="comment">
    <div>
      <ul class="score">
        <li><img src="../../assets/img/full_star.png" alt=""></li>
        <li><img src="../../assets/img/full_star.png" alt=""></li>
        <li><img src="../../assets/img/empty_star.png" alt=""></li>
        <li><img src="../../assets/img/empty_star.png" alt=""></li>
        <li><img src="../../assets/img/empty_star.png" alt=""></li>
      </ul>
    </div>
    <p style="color:orange"><strong>4.5</strong></p>
    <p>好评数</p>
  </div>
</template>
<style scoped>
  .score{
    list-style: none;
    margin:0;
    padding: 0;
  }
  .score li{
    display: inline-block;
    
  }
  .score li img{
    width: 20px;
    height: 20px;
  }
  .comment p{
    text-indent: 62%
  }
</style>