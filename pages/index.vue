<script setup>
const videoApiList = ref([])
const selectApi = ref(videoApiList.value[0])
const videoURL = ref('')
const isPlay = ref(false)
const playURL = ref('')

const handlePlay = () => {
  isPlay.value = true
  playURL.value = selectApi.value + videoURL.value
}

try {
  const data = await $fetch('/api/getVideoLink')
  if (data.success) {
    videoApiList.value = data.data.map(v => ({ value: v.url, name: v.name }))
    selectApi.value = videoApiList.value[0].value
  }
} catch (error) {
  console.log(error);
}
</script>

<template>
  <div class="flex my-6">
    <USelect class="w-32" v-model="selectApi" :options="videoApiList" option-attribute="name" />
    <UInput class="flex-1 mx-2" v-model="videoURL" placeholder="Please enter the video address" />
    <UButton @click="handlePlay">
      <div class="h-5 w-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z">
          </path>
        </svg>
      </div>
    </UButton>
  </div>

  <div class="h-[600px] w-full border rounded-md flex justify-center items-center overflow-hidden">
    <iframe class="w-full h-full" :src="playURL" frameborder="0" v-if="isPlay" scrolling="no" allowfullscreen="true"
      allowtransparency="true" width="100%" height="100%"></iframe>
    <div v-else>
      <svg class="w-48 h-48" height="1024" node-id="1" sillyvg="true" template-height="1024" template-width="1024"
        version="1.1" viewBox="0 0 1024 1024" width="1024" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs node-id="52">
          <linearGradient gradientUnits="objectBoundingBox" id="linear-gradient" node-id="3" spreadMethod="pad" x1="0.5"
            x2="0.5" y1="0" y2="1">
            <stop offset="0" stop-color="#e1e1e1" />
            <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="objectBoundingBox" id="linearGradient1" node-id="60" spreadMethod="pad" x1="0.5"
            x2="0.5" y1="0" y2="1">
            <stop offset="0" stop-color="#e2e2e2" />
            <stop offset="1" stop-color="#bcbcbc" />
          </linearGradient>
          <linearGradient gradientUnits="objectBoundingBox" id="linearGradient2" node-id="67" spreadMethod="pad" x1="0.5"
            x2="0.5" y1="0" y2="1">
            <stop offset="0" stop-color="#e2e2e2" />
            <stop offset="1" stop-color="#bcbcbc" />
          </linearGradient>
          <linearGradient gradientUnits="objectBoundingBox" id="linear-gradient-2" node-id="6" spreadMethod="pad" x1="0.5"
            x2="0.5" y1="0" y2="1">
            <stop offset="0" stop-color="#e2e2e2" />
            <stop offset="1" stop-color="#bcbcbc" />
          </linearGradient>
          <linearGradient gradientUnits="objectBoundingBox" id="linear-gradient-5" node-id="9" spreadMethod="pad" x1="0"
            x2="1" y1="0.272" y2="0.354">
            <stop offset="0" stop-color="#bebbbb" />
            <stop offset="1" stop-color="#dfdfdf" />
          </linearGradient>
          <linearGradient gradientUnits="objectBoundingBox" id="linear-gradient-6" node-id="12" spreadMethod="pad" x1="0"
            x2="1" y1="0.245" y2="0.556">
            <stop offset="0" stop-color="#ececec" />
            <stop offset="1" stop-color="#c9c6c6" />
          </linearGradient>
          <linearGradient gradientUnits="objectBoundingBox" id="linear-gradient-7" node-id="15" spreadMethod="pad" x1="0"
            x2="1" y1="0.536" y2="0.425">
            <stop offset="0" stop-color="#bcbbbb" />
            <stop offset="1" stop-color="#dbdada" />
          </linearGradient>
          <linearGradient gradientUnits="objectBoundingBox" id="linear-gradient-8" node-id="18" spreadMethod="pad"
            x1="0.522" x2="0.346" y1="0.174" y2="0.835">
            <stop offset="0" stop-color="#fefefe" />
            <stop offset="1" stop-color="#c4bfbf" />
          </linearGradient>
          <linearGradient gradientUnits="objectBoundingBox" id="linear-gradient-9" node-id="21" spreadMethod="pad"
            x1="0.385" x2="0.623" y1="0.14" y2="0.885">
            <stop offset="0" stop-color="#ffffff" />
            <stop offset="1" stop-color="#c7c7c7" />
          </linearGradient>
          <linearGradient gradientUnits="objectBoundingBox" id="linear-gradient-10" node-id="24" spreadMethod="pad"
            x1="0.49999997" x2="0.49999997" y1="0" y2="0.99999994">
            <stop offset="0" stop-color="#e1e1e1" />
            <stop offset="1" stop-color="#b1aeae" />
          </linearGradient>
          <clipPath id="clip-暂无数据" node-id="27">
            <path d="M 0.00 0.00 L 1024.00 0.00 L 1024.00 1024.00 L 0.00 1024.00 Z" fill="#000000" fill-rule="nonzero"
              node-id="117" stroke="none" target-height="1024" target-width="1024" target-x="0" target-y="0" />
          </clipPath>
        </defs>
        <g clip-path="url(#clip-暂无数据)" id="暂无数据" node-id="29">
          <path d="M 0.00 0.00 L 1024.00 0.00 L 1024.00 1024.00 L 0.00 1024.00 Z" fill="#ffffff" fill-rule="nonzero"
            node-id="122" stroke="none" target-height="1024" target-width="1024" target-x="0" target-y="0" />
          <path
            d="M 1024.00 798.10 L 1023.70 805.50 L 1022.90 812.90 L 1021.50 820.20 L 1019.60 827.60 L 1017.10 835.00 L 1014.10 842.40 L 1010.60 849.40 L 1006.70 856.40 L 1002.20 863.40 L 997.10 870.40 L 991.40 877.40 L 985.00 884.50 L 977.30 892.30 L 968.80 900.10 L 959.40 907.90 L 949.20 915.70 L 938.00 923.40 L 926.90 930.50 L 915.00 937.40 L 902.30 944.30 L 888.60 951.10 L 874.00 957.80 L 859.60 964.00 L 844.60 969.90 L 828.90 975.50 L 812.60 981.00 L 796.30 986.00 L 762.10 995.20 L 744.20 999.40 L 708.20 1006.80 L 670.40 1012.90 L 632.10 1017.70 L 612.50 1019.60 L 592.60 1021.20 L 566.00 1022.70 L 539.20 1023.70 L 512.00 1024.00 L 484.80 1023.70 L 458.00 1022.70 L 431.40 1021.20 L 411.50 1019.60 L 391.90 1017.70 L 353.60 1012.90 L 315.80 1006.80 L 279.80 999.40 L 261.90 995.20 L 227.70 986.00 L 211.40 981.00 L 195.10 975.50 L 179.40 969.90 L 164.40 964.00 L 150.00 957.80 L 135.40 951.10 L 121.70 944.30 L 109.00 937.40 L 97.10 930.50 L 86.00 923.40 L 74.80 915.70 L 64.60 907.90 L 55.20 900.10 L 46.70 892.30 L 39.00 884.50 L 32.60 877.40 L 26.90 870.40 L 21.80 863.40 L 17.30 856.40 L 13.40 849.40 L 9.90 842.40 L 6.90 835.00 L 4.40 827.60 L 2.50 820.20 L 1.10 812.90 L 0.30 805.50 L 0.00 798.10 L 0.30 790.70 L 1.10 783.30 L 2.50 775.90 L 4.40 768.60 L 6.90 761.20 L 9.90 753.80 L 13.40 746.80 L 17.30 739.80 L 21.80 732.80 L 26.90 725.80 L 32.60 718.70 L 39.00 711.60 L 46.70 703.80 L 55.20 696.00 L 64.60 688.30 L 74.80 680.50 L 86.00 672.70 L 97.10 665.70 L 109.00 658.70 L 121.70 651.80 L 135.40 645.00 L 150.00 638.30 L 164.40 632.20 L 179.40 626.30 L 195.10 620.60 L 211.40 615.20 L 227.70 610.20 L 261.90 600.90 L 279.80 596.70 L 315.80 589.40 L 353.60 583.20 L 391.90 578.50 L 411.50 576.60 L 431.40 575.00 L 458.00 573.40 L 484.80 572.50 L 512.00 572.20 L 539.20 572.50 L 566.00 573.40 L 592.60 575.00 L 612.50 576.60 L 632.10 578.50 L 670.40 583.20 L 708.20 589.40 L 744.20 596.70 L 762.10 600.90 L 796.30 610.20 L 812.60 615.20 L 828.90 620.60 L 844.60 626.30 L 859.60 632.20 L 874.00 638.30 L 888.60 645.00 L 902.30 651.80 L 915.00 658.70 L 926.90 665.70 L 938.00 672.70 L 949.20 680.50 L 959.40 688.30 L 968.80 696.00 L 977.30 703.80 L 985.00 711.60 L 991.40 718.70 L 997.10 725.80 L 1002.20 732.80 L 1006.70 739.80 L 1010.60 746.80 L 1014.10 753.80 L 1017.10 761.20 L 1019.60 768.60 L 1021.50 775.90 L 1022.90 783.30 L 1023.70 790.70 L 1024.00 798.10 Z"
            fill="url(#linear-gradient)" fill-rule="nonzero" group-id="1,2" id="椭圆_1" node-id="32" stroke="none"
            target-height="451.8" target-width="1024" target-x="0" target-y="572.2" />
          <path d="M 211.20 604.20 L 219.20 604.20 L 219.20 671.10 L 211.20 671.10 Z" fill="#c5c5c5" fill-rule="nonzero"
            group-id="1,3,9" id="矩形_4" node-id="34" stroke="none" target-height="66.89996" target-width="8"
            target-x="211.2" target-y="604.2" />
          <path
            d="M 215.50 496.80 L 223.80 506.70 L 232.10 517.20 L 241.10 529.70 L 249.40 543.10 L 252.80 549.80 L 255.40 556.00 L 256.70 560.20 L 257.50 563.90 L 257.70 567.30 L 257.50 571.70 L 256.90 575.90 L 255.80 579.90 L 254.40 583.70 L 252.60 587.50 L 248.10 594.20 L 242.30 599.90 L 239.10 602.30 L 231.90 606.20 L 228.10 607.60 L 224.00 608.70 L 219.90 609.30 L 215.50 609.50 L 211.10 609.30 L 206.90 608.70 L 202.90 607.60 L 199.00 606.20 L 195.30 604.40 L 188.60 599.90 L 182.80 594.20 L 180.40 590.90 L 176.50 583.70 L 175.10 579.90 L 174.10 575.90 L 173.40 571.70 L 173.20 567.30 L 173.50 563.90 L 174.20 560.20 L 175.50 556.00 L 178.10 549.80 L 181.60 543.10 L 185.50 536.40 L 194.40 523.20 L 207.10 506.70 L 215.50 496.80 Z"
            fill="url(#linearGradient1)" fill-rule="nonzero" group-id="1,3,10" id="路径_3" node-id="35" stroke="none"
            target-height="112.70001" target-width="84.500015" target-x="173.2" target-y="496.8" />
          <path d="M 799.40 633.60 L 807.40 633.60 L 807.40 689.80 L 799.40 689.80 Z" fill="#c5c5c5" fill-rule="nonzero"
            group-id="1,4,11" id="矩形_4-2" node-id="37" stroke="none" target-height="56.200012" target-width="8"
            target-x="799.4" target-y="633.6" />
          <path
            d="M 804.60 542.40 L 811.70 550.80 L 818.80 559.80 L 826.50 570.50 L 833.50 581.90 L 836.50 587.70 L 838.70 593.00 L 839.80 596.50 L 840.70 602.60 L 839.90 609.90 L 837.80 616.60 L 835.70 620.80 L 833.20 624.60 L 830.10 628.10 L 826.60 631.20 L 822.80 633.70 L 818.60 635.80 L 811.90 637.90 L 808.30 638.50 L 804.60 638.70 L 797.30 637.90 L 790.50 635.80 L 786.30 633.70 L 782.50 631.20 L 779.10 628.10 L 776.00 624.60 L 773.40 620.80 L 771.30 616.60 L 770.10 613.30 L 768.70 606.30 L 768.50 602.60 L 768.70 599.70 L 770.50 593.00 L 772.70 587.70 L 779.00 576.20 L 786.60 565.00 L 797.40 550.80 L 804.60 542.40 Z"
            fill="url(#linearGradient2)" fill-rule="nonzero" group-id="1,4,12" id="路径_3-2" node-id="38" stroke="none"
            target-height="96.29999" target-width="72.20001" target-x="768.5" target-y="542.4" />
          <path d="M 881.10 677.80 L 886.40 677.80 L 886.40 709.60 L 881.10 709.60 Z" fill="#c5c5c5" fill-rule="nonzero"
            group-id="1,5,13" id="矩形_4-3" node-id="40" stroke="none" target-height="31.799988" target-width="5.300049"
            target-x="881.1" target-y="677.8" />
          <path
            d="M 884.60 625.90 L 889.80 632.20 L 897.30 642.30 L 901.80 649.80 L 904.30 655.80 L 904.90 659.80 L 904.60 663.60 L 903.60 667.00 L 902.10 670.10 L 900.10 673.00 L 897.70 675.40 L 894.80 677.40 L 891.70 678.90 L 888.30 679.90 L 884.60 680.20 L 880.80 679.90 L 877.40 678.90 L 874.30 677.40 L 871.40 675.40 L 869.00 673.00 L 867.00 670.10 L 865.50 667.00 L 864.50 663.60 L 864.20 659.80 L 864.40 658.00 L 865.70 653.40 L 867.30 649.80 L 869.50 646.00 L 874.40 638.60 L 884.60 625.90 Z"
            fill="url(#linear-gradient-2)" fill-rule="nonzero" group-id="1,5,14" id="路径_3-3" node-id="41" stroke="none"
            target-height="54.299988" target-width="40.700012" target-x="864.2" target-y="625.9" />
          <path d="M 295.10 332.90 L 295.10 621.20 L 498.10 572.20 L 498.10 298.60 Z" fill="#d9d7d7" fill-rule="nonzero"
            group-id="1,6,15" id="路径_31" node-id="43" stroke="none" target-height="322.6" target-width="203"
            target-x="295.1" target-y="298.6" />
          <path d="M 719.70 615.30 L 722.60 335.30 L 497.10 298.60 L 497.10 570.20 Z" fill="url(#linear-gradient-5)"
            fill-rule="nonzero" group-id="1,6,16" id="路径_32" node-id="44" stroke="none" target-height="316.69998"
            target-width="225.49997" target-x="497.1" target-y="298.6" />
          <path d="M 295.10 332.90 L 295.10 623.10 L 516.70 689.80 L 516.70 403.50 Z" fill="url(#linear-gradient-6)"
            fill-rule="nonzero" group-id="1,6,17" id="路径_33" node-id="45" stroke="none" target-height="356.9"
            target-width="221.6" target-x="295.1" target-y="332.9" />
          <path d="M 722.60 620.20 L 516.20 689.70 L 516.60 403.50 L 722.60 335.20 Z" fill="url(#linear-gradient-7)"
            fill-rule="nonzero" group-id="1,6,18" id="路径_34" node-id="46" stroke="none" target-height="354.5"
            target-width="206.39996" target-x="516.2" target-y="335.2" />
          <path d="M 295.20 333.00 L 235.70 398.90 L 462.70 483.00 L 516.70 403.50 Z" fill="url(#linear-gradient-8)"
            fill-opacity="0.51" fill-rule="nonzero" group-id="1,6,19" id="路径_35" node-id="47" stroke="none"
            target-height="150" target-width="281" target-x="235.7" target-y="333" />
          <path d="M 516.20 403.20 L 581.70 477.10 L 768.50 408.40 L 722.90 335.30 Z" fill="url(#linear-gradient-9)"
            fill-opacity="0.59" fill-rule="nonzero" group-id="1,6,20" id="路径_36" node-id="48" stroke="none"
            target-height="141.80002" target-width="252.29999" target-x="516.2" target-y="335.3" />
          <path
            d="M 590.00 216.70 L 557.60 180.30 L 692.50 169.90 L 638.20 272.00 L 597.00 223.40 L 658.00 187.90 Z M 594.60 232.40 L 586.10 260.20 L 608.40 248.20 Z"
            fill="url(#linear-gradient-10)" fill-rule="nonzero" group-id="1,7" id="发布色块_1_" node-id="49" stroke="none"
            target-height="102.100006" target-width="134.90002" target-x="557.6" target-y="169.9" />
          <path
            d="M 566.00 246.90 L 552.20 251.00 L 537.90 255.80 L 521.20 262.30 L 512.70 266.10 L 504.30 270.20 L 496.20 274.70 L 488.90 279.40 L 484.40 282.80 L 480.50 286.30 L 477.20 289.70"
            fill="none" group-id="1,8" id="路径_37" node-id="50" stroke="#afafaf" stroke-dasharray="8 2"
            stroke-linecap="butt" stroke-width="3" target-height="42.80002" target-width="88.79999" target-x="477.2"
            target-y="246.9" />
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped></style>