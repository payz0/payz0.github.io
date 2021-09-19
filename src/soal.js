if (!localStorage.getItem("kelas")) {
    window.location.replace("https://payz0.github.io/jadwal/");
  }
  var kelas7 = [
    [
      "1FAIpQLSfqJCksIbBKFEOZAo3IjUXJuH5JmWndGGDaBRB-9rPg-Rf8uw", //0. islam
      "1FAIpQLSfgp0Q-VpIhNSEc4q6rhZ0qf18TcGbG-cms3jdv5srGc_xfAA", //1. protestan
      "1FAIpQLSdb1zTk0zSLFvoEE6rVygfom2ybFV4G2fP6D-r6XBEBWyJ_ZQ", //2. katolik
      "", //3. budha
      "", //4. hindu
      "1FAIpQLScI42HtxBXt0bRSSpBYFdG9HyOZYxDu80FrtydgIgzTBGYTXg", //5. pkn
      "1FAIpQLSdGAAe-OZ5pxMx3dgotaCoRsqt6ttTb-25IeA48A2A9iAHEIg", //6. ipa
      "1FAIpQLSdbwcMY4IDGAgSqO9pIk7eY1nV7utqeVmc0Jy0FXybOZ7Rmdw", //7. ips
      "1FAIpQLSeGzoCMF3dY55rrxgLWCkpaZzG8vKzU26Gnu4D-89J_NoNVRg", //8. mate
      "1FAIpQLSeL79Q9TuUIClQJbDj-beIS5H5xZgs_6tiMcyEbc11O0gE1mQ", //9. indo
      "1FAIpQLSc0r4ZS3BIUrwlAL982eCLm0fQQRuIlULw-AI4omZEFOPmKEw", //10. ingg
      "1FAIpQLSfi5Rpd2Tku3KauimdKoMtxOOAfgugI9-ukceaQszMB6NCDSw", //11. senbud
      "1FAIpQLSerFa8RJPDXK9q_i0e5KT8WVzqj9s7y--_2dxnSL_9Auu2mAA", //12. penjas
      "1FAIpQLSd2BV6muaNUph6THCj7-YXY197gGqgZVXS-f6_hh_ZwHpZgJA" //13. prakarya
    ],
    [
      "1FAIpQLSce3nzG39YkRtmBVYRv71BSheifEG51RNY0pSbd7hPnY_SHZA", //0. islam
      "1FAIpQLSchpJtH1UzS_Yks_dZBcV2QPqt6Lw42zptGt0M80GhJABIH6Q", //1. protestan
      "1FAIpQLScyDhQ0adso1IMc-5r1guJ6zkKguvTHSJgRZuLjlDgYHU7OsQ", //2. katolik
      "1FAIpQLScAv8Ux-W4g0kTWzYgHo5HbGpM7IRbf0q1IlL9RJbEwb6za7Q", //3. budha
      "", //4. hindu
      "1FAIpQLSczAhNEMhmYGZyfXzCRvhUMjoQYCvT1G_UPOZHoT8QWrNCl1A", //5. pkn
      "1FAIpQLSf2He2AmnaU0WSMr01qA1Dq08uQT3WjEPX1t5WvfnS1CIr_bg", //6. ipa
      "1FAIpQLSfyfZPKZ-yurTiKUsoFPgBA2hAEbu54aG1WsHMeaaaCEWcmuQ", //7. ips
      "1FAIpQLSdVFeHnRHj_kd4HdrJpqbAPqg4Q2SLoTgHozaINflJ5qgcZbg", //8. mate
      "1FAIpQLSdv32B0T2cjqiUWgXfX-w5zd03x5z7yS5iyvTWP9gNxiZHnBw", //9. indo
      "1FAIpQLSeurbDOL4gpaMtzFzHddU-Scf_LBaxnnC9UQQ9b1rc2pdSa1A", //10. ingg
      "1FAIpQLSd6IOdTqerh2ksBwLP4jnWQLyJJn4RmsfDrClcAipM3hz7ykg", //11. senbud
      "1FAIpQLSeU9KCeRdQfzYOg7qQcp72a53Fof0pMAkP0Lvjegq3--gkYbw", //12. penjas
      "1FAIpQLSedm7SP9n9zQuOb-CMvv63M0jUi1HcEZ7nWnx2rFi1JGnvQBg" //13. prakarya
    ],
    [
      "1FAIpQLSf4gZPQ1qMIegzcmBqhzeAIt9uej5E_JfR6cemNci7YO02bhg", //0. islam
      "1FAIpQLSeZHztuoQk-bSca8SP_g5vFHvvVqzZr1-9XNJFXmDUG6-GG3w", //1. protestan
      "1FAIpQLSfgZR7sBq5T93znECmkUkGyEGkceP73fK1IgESWIHd0KowgLw", //2. katolik
      "", //3. budha
      "1FAIpQLSd7IlLkwdlnTIjq7X8gL00EOXLvWUN60vnlJsRDBPVx4Tce5A", //4. hindu
      "1FAIpQLSczooJ8kapGAW_tGuljBOyaChh1PeI80MthoBpaw1F77QPxig", //5. pkn
      "1FAIpQLSftCjQQTmVso6je72yDCpMh9XtZ1MZf9oB8ib4ptmDLEpNjvQ", //6. ipa
      "1FAIpQLSdAKryJgM-4b3QwMSu-ju3a_qhyiAAnC6paF9TmBqm3u3BS-A", //7. ips
      "1FAIpQLSeGfoe3P-28QIlsh1foRJB28-ihwAQgYB2fqAEzwXkkQYJ6mw", //8. mate
      "1FAIpQLSfGZSXDARyN4bwpopoHWD23uF74-1CD1Q2gowCkvkMmqfns6A", //9. indo
      "1FAIpQLScwvYgbOvPcZSqgxHoHHgga2p3uUkBx-OLcwxt_43kHGXbfVA", //10. ingg
      "1FAIpQLSfCHalmJ2H5DRmAO8YPKY5wYhuClVAgJADcQdBqzcyaB8TrSQ", //11. senbud
      "1FAIpQLSeJC5X6BcwxGDWJKW8ObskpZBMJKV0bc1Lnwh4dDfLYyhBUlA", //12. penjas
      "1FAIpQLScGjkfttH_cNpOVYSxNsfg_ixb3scg5crTOy-g2A4-_-j0hLQ" //13. prakarya
    ]
  ];
  
  var harian = [
    { tgl: 20, sesi: [9, 0] },
    { tgl: 21, sesi: [6, 13] },
    { tgl: 22, sesi: [10, 11] },
    { tgl: 23, sesi: [7, 12] },
    { tgl: 24, sesi: [8] },
    { tgl: 25, sesi: [5] }
  ];
  
  var waktu = new Date();
  var tgl = waktu.getDate();
  var bulan = waktu.getMonth();
  var tahun = waktu.getFullYear();
  var jam = waktu.getHours();
  var menit = waktu.getMinutes();
  // var head = document.getElementById("header");
  var soal = document.getElementById("soal");
  var sesiAgama;
  var soalAgama = false;
  var jam730 = jam * 60 + menit; //450
  var jam9 = jam * 60 + menit; // 540
  var jam930 = jam * 60 + menit; //570
  var jam11 = jam * 60 + menit; //660
  $(".box").hide();
  $("#agama").hide();
  // head.innerHTML = jam + ":" + menit + " durasi " + 9 * 60;
  
  function sesi(num) {
    sesiAgama = num;
    soalAgama = true;
    seleksiHari(90);
    $("#agama").hide();
    localStorage.setItem("agama", num);
  }
  
  function seleksiHari(lama) {
    harian.forEach((tag, i) => {
      if (tag.tgl != tgl) {
        document.getElementById("mundur").innerHTML =
          "Tunggu waktu ujian sesuai jadwal, lalu refresh ya ..";
        // soal.innerHTML = "Tunggu jadwal 2";
      } else {
        // sesi 1
  
        if (jam730 >= 450 && jam9 <= 540) {
          soal.innerHTML =
            "<iframe src='https://docs.google.com/forms/d/e/" +
            kelas7[localStorage.getItem("kelas")][tag.sesi[0]] +
            "/viewform?embedded=true' width='100%' height='600' frameborder='0'marginheight='0' marginwidth='0'>Loading…</iframe>";
          timer(lama, 1000);
          streaming(150, 100);
        }
  
        // sesi 2
        if (jam930 >= 570 && jam11 <= 660) {
          var indx;
          var sol = false;
          if (tgl == 20) {
            $("#agama").show();
            soal.innerHTML = "Pilih soal sesuai dengan agama siswa";
            if (localStorage.getItem("agama")) {
              soalAgama = true;
              sesiAgama = localStorage.getItem("agama");
              $("#agama").hide();
            }
            if (soalAgama) {
              soal.innerHTML =
                "<iframe src='https://docs.google.com/forms/d/e/" +
                kelas7[localStorage.getItem("kelas")][sesiAgama] +
                "/viewform?embedded=true' width='100%' height='600' frameborder='0'marginheight='0' marginwidth='0'>Loading…</iframe>";
              timer(lama, 1000);
              streaming(150, 100);
            }
          } else {
            localStorage.removeItem("agama");
            soal.innerHTML =
              "<iframe src='https://docs.google.com/forms/d/e/" +
              kelas7[localStorage.getItem("kelas")][tag.sesi[1]] +
              "/viewform?embedded=true' width='100%' height='600' frameborder='0'marginheight='0' marginwidth='0'>Loading…</iframe>";
            timer(lama, 1000);
            streaming(150, 100);
          }
        }
      }
    });
  }
  
  function timer(minut, speed) {
    var menit;
    var detik; // = 60;
    var durasi; // =  detik * minut;
    var mundur; // = durasi;
    var lebar;
    if (localStorage.getItem("menit")) {
      mundur = localStorage.getItem("menit");
      detik = localStorage.getItem("detik");
      durasi = 60 * minut;
    } else {
      detik = 60;
      durasi = detik * minut;
      mundur = durasi;
    }
  
    var timer = setInterval(() => {
      mundur--;
      detik--;
      lebar = (mundur / durasi) * 100;
      menit = Math.floor(mundur / 60);
      if (detik < 0) {
        detik = 60;
      }
  
      if (mundur < 3) {
        localStorage.clear();
      }
      if (mundur <= 0) {
        console.log(" waktu habis");
        detik = 0;
        clearInterval(timer);
        document.getElementById("vids").style.display = "none";
        soal.innerHTML =
          "<h1 style='text-align:center;margin-top:100px'>Waktu sudah habis</h1>";
      } else {
        document.getElementById("waktu").style.width = lebar + "%";
        localStorage.setItem("menit", mundur);
        localStorage.setItem("detik", detik);
      }
  
      // warning
      if (mundur == 120 || mundur == 145) {
        $(".box").show();
      }
      // console.log(mundur);
      document.getElementById("mundur").innerHTML =
        menit + " menit " + detik + " detik";
      document.getElementById("tersisa").innerHTML =
        menit + " menit " + detik + " detik";
    }, speed);
  }
  
  function streaming(lebar, tinggi) {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: lebar,
          height: tinggi
        }
      })
      .then((stream) => {
        document.getElementById("vids").srcObject = stream;
      });
  }
  //durasi ujian
  seleksiHari(90);
  
  // download Exce
  function excel(tableID, filename = "") {
    var downloadLink;
    var dataType = "application/vnd.ms-excel";
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");
  
    // Specify file name
    filename = filename ? filename + ".xls" : "excel_data.xls";
  
    // Create download link element
    downloadLink = document.createElement("a");
  
    document.body.appendChild(downloadLink);
  
    if (navigator.msSaveOrOpenBlob) {
      var blob = new Blob(["\ufeff", tableHTML], {
        type: dataType
      });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // Create a link to the file
      downloadLink.href = "data:" + dataType + ", " + tableHTML;
  
      // Setting the file name
      downloadLink.download = filename;
  
      //triggering the function
      downloadLink.click();
    }
  }
  
  //drag
  interact("#grid").draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "parent",
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,
  
    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
  
      // call this function on every dragend event
      end(event) {
        var textEl = event.target.querySelector("p");
  
        textEl &&
          (textEl.textContent =
            "moved a distance of " +
            Math.sqrt(
              (Math.pow(event.pageX - event.x0, 2) +
                Math.pow(event.pageY - event.y0, 2)) |
                0
            ).toFixed(2) +
            "px");
      }
    }
  });
  function dragMoveListener(event) {
    var target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
  
    // translate the element
    target.style.transform = "translate(" + x + "px, " + y + "px)";
  
    // update the posiion attributes
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  }
  
  // this function is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;
  