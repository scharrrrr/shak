function nonDiv() {
    document.getElementById('Content').style = "opacity:0;visibility:hidden;margin-top:30vh;";
} 
  function showDiv() {
      setTimeout(tombol,1200);document.getElementById("bq").style = "opacity:1;visibility:visible;margin-top:0";document.getElementById('bodyblur').style = "opacity:1;";document.getElementById('Content').style = "opacity:1;margin-top:1vh;animation:kont 3s infinite;";document.getElementById("katakata").innerHTML = kata1;}
  function loadfoto() {document.getElementById('foto1').src = gambar1;document.getElementById('foto2').src = gambar2;}
  function showAkhir() {setInterval(createHeart,200);document.getElementById('k2').style = "opacity:1;transform:scale(1);margin:0;";document.getElementById('ftdua').style = "transform:scale(1);";document.getElementById('final1').style = "transform:scale(1);";document.getElementById('Content').style.display = "none";}
  function mulaiakhir() {nonDiv();setTimeout(showAkhir,1400);setTimeout(finalis,2400);}
  function showTom() {document.getElementById('idkirim').style = "opacity:1;visibility:visible;margin-top:140px;";} function tombol(){contTom.style="display:flex";} function akhiran(){document.getElementById("akhiran").style = "display:inline-flex";}
  function otomatis() {befanimkata();setTimeout(animkata,400);contTom.style="display:none";setTimeout(tombol,1200);}
  function befanimkata(){katakata.style="transform:scale(.01);";katabawah.style="transform:scale(.01);";} function animkata() {katakata.style="transform:scale(1);";katabawah.style="transform:scale(1);";}
  function animakhir() {akhiran.style="display:block;";}
  const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040',}); const swalsy = Swal.mixin({confirmButtonText: 'Iya', allowOutsideClick: false,}); const swalst = Swal.mixin({allowOutsideClick: false, showConfirmButton: false, timer: 2500, timerProgressBar: true,});
  var today = new Date();var dd = String(today.getDate()).padStart(2, '0');var mm = String(today.getMonth() + 1).padStart(2, '0');var yyyy = today.getFullYear();const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];today = dd + ' ' + monthNames[today.getMonth()] + ' ' + yyyy;
  function play() {var audio = new Audio('' + linklagu);audio.play();}
  async function menuju(){if(fungsi==2){await swals.fire('Kirim pesan ke WhatsApp aku, ya!');window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;setTimeout(maubucin,3500);}}

  flag=1;flagg=1;
  function tolak(){
  	if(fungsi==1){
  	if(flagg==1){Bn.style="margin-left:90px;transform: rotate(45deg)";buttonv2.style="opacity:1;";By.style="opacity:0";document.getElementById("buttonv2").innerHTML = tekstolak1;flagg=2}
  	    else if(flagg==2){Bn.style="margin-left:95px;transform: rotate(135deg)";document.getElementById("buttonv2").innerHTML = tekstolak2;flagg=3}
  		else if(flagg==3){Bn.style="margin:12px 8px 12px 0;transform: rotate(0)";buttonv2.style="opacity:0;";By.style="opacity:1";flagg=1}
  	    }
   }
    
    fungsi=1;
    async function terima(){
        alert("Eh itu tadi cuman bercandaa aja sii");
  alert("Tapi kalo mau diseriusin juga gapapa xixixi");
  alert("Kalo jadi chat 'Mau' di WA ae");
  alert("Kalo gamau juga gapapa seh");
  alert("Mungkin ini seh terakhir");
  alert("kalau di universe ini kita gabisa bersatu");
  alert("Semoga aja diriku dari universe lain bisa dapetin kamu");
  alert("Udahh dulu yaa");
  alert("Dadahh kheyy sampai jumpa lagi");
  alert("Lov u in every universe Kheyyyyy");
  alert("i.l.y.b.i.d.k.h.t.t.y.b.i.k.y.d.l.m.b");
       }

    /*async function terima(){
            if(fungsi==1){foto1.style="display:none";foto2.style="display:inline-flex";katakata.innerHTML = katakhir;document.getElementById("katabawah").innerHTML = katakhirb;befanimkata();setTimeout(animkata,400);contTom.style="display:none";setTimeout(akhiran,900);setInterval(createHeart,200);fungsi=2;}
    }*/