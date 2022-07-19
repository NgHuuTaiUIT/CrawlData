async function downloadImage(imageSrc, name) {
  const image = await fetch(imageSrc);
  const imageBlog = await image.blob();
  const imageURL = URL.createObjectURL(imageBlog);

  const link = document.createElement("a");
  link.href = imageURL;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const urls = [
  "https://product.hstatic.net/1000075078/product/bac-siu-da_9bf82220a1a54847aa7357de541e7552_large.jpg                   ",
  "https://product.hstatic.net/1000075078/product/bac-xiu-nong_fa679e04523c4f138354e852745b223e_large.jpg",
  "https://product.hstatic.net/1000075078/product/ca-phe-den-da_6e25255ae31c4f3bbbb502f77e2c100d_large.jpg",
  "https://product.hstatic.net/1000075078/product/ca-phe-den-nong_34c4834cd4094d7e8659ad8d3c4fa6fc_large.jpg",
  "https://product.hstatic.net/1000075078/product/ca-phe-sua-da_b00c53d18cd84144a164790323106a2f_large.jpg",
  "https://product.hstatic.net/1000075078/product/bottlecfsd_496652_400x400_c673691fc1de4b359ee22dcf0c9c614f_large.jpg",
  "https://product.hstatic.net/1000075078/product/ca-phe-sua-nong_0beecc27870549a5bf016dc6a8fac60e_large.jpg",
  "https://product.hstatic.net/1000075078/product/latte-tao-le-que-nong_f7ae97f81d634489bf5da01a64f7543a_large.jpg",
  "https://product.hstatic.net/1000075078/product/latte-tao-le-que-da_77aca1462ea5478d93c6a41f15b1af59_large.jpg",
  "https://product.hstatic.net/1000075078/product/latte-tao-le-que-chai-fresh-500ml_6e6f6032735d463b8f5a5de4ecb9d091_large.jpg",
  "https://product.hstatic.net/1000075078/product/mochanong_433980_400x400_7d8231d596fc4ac39db757cd34250868_large.jpg",
  "https://product.hstatic.net/1000075078/product/mocha-da_538820_400x400_73100250cb904ad0aad79a36a59aeea7_large.jpg",
  "https://product.hstatic.net/1000075078/product/espressonong_612688_400x400_8fdb6dc2f37a4445b43a7ce3ee4aebb0_large.jpg",
  "https://product.hstatic.net/1000075078/product/cfdenda-espressoda_185438_400x400_bc9c244c3c644eccb3edad8578569126_large.jpg",
  "https://product.hstatic.net/1000075078/product/cappuccino_621532_400x400_67c12956866c442585a6d47d0771a978_large.jpg",
  "https://product.hstatic.net/1000075078/product/capu-da_487470_400x400_e11f07c213814171b07a5801722e3bb3_large.jpg",
  "https://product.hstatic.net/1000075078/product/americano-nong-app_652009_400x400_c4cc077adacd4340bb41a6e1e4710a95_large.jpg",
  "https://product.hstatic.net/1000075078/product/latte-da_438410_400x400_a48fbcd0a33f4ceba1803acbbe1292f4_large.jpg",
  "https://product.hstatic.net/1000075078/product/caramel-macchiato-nong_622b0363a2144bef9bb27bccd9f5e5b6_large.jpg",
  "https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg",
  "https://product.hstatic.net/1000075078/product/latte_851143_400x400_7305aaa080df4202a26dedf898e7196b_large.jpg",
  "https://product.hstatic.net/1000075078/product/classic-cold-brew_791256_400x400_b08cfc2d37a541c3893f654686b5474d_large.jpg",
  "https://product.hstatic.net/1000075078/product/cold-brew-pbt_130351_400x400_ca074b4907aa492bbf838082c4a82a35_large.jpg",
  "https://product.hstatic.net/1000075078/product/cold-brew-sua-tuoi_379576_400x400_fd791b0775f846e193ff35739cc51ff2_large.jpg",
  "https://product.hstatic.net/1000075078/product/classic-cold-brew_239501_400x400_5ba92cfd66bd412996c28acc3a346b75_large.jpg"
];
// function download() {
//   urls
//     .slice(19)
//     .map((url, index) => downloadImage(url, `product-${index + 19}`));
// }
const data = [
  "https://www.phongcachxanh.vn/shop/product/ban-phim-co-filco-majestouch-convertible-2-candy-cherry-fullsize-12476?search=convertible+2+candy+cherry+fullsize#attr=1609,22884,22885,262,2495,22887,22886,22888,22889,22890"
];
function download() {
  console.log(data);
  data
    .slice(0, 5)
    .map((item, index) => downloadImage(item.src, `product-${index + 0}`));
}
