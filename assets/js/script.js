var dataBarang = [{
  nama_barang: "Nama",
  jumlah: "Hari",
  total: 0
}];

function showBarang() {
  var listBarang = document.getElementById("table");

  listBarang.innerHTML = "<tr><th>Nama</th><th>Jumlah</th><th>Total</th><th>Action</th></tr>";

  for (let i = 0; i < dataBarang.length; i++) {
    if (i !== 0) {
      var btnEdit = "<a href='#' class='btn btn-warning' style='margin-right:5px;' onclick='editBarang(" + i + ")'>Edit</a>";
      var btnHapus = "<a href='#' class='btn btn-danger' onclick='deleteBarang(" + i + ")'>Hapus</a>";
      listBarang.innerHTML +=
        "<tr><td>" + dataBarang[i].nama_barang + "</td><td>" + dataBarang[i].jumlah + "</td><td>" + dataBarang[i].total + "</td><td>" + btnEdit + btnHapus + "</td></tr>";
    } else {
      // listBarang.innerHTML +=
      // "<th>Data Belum Di Masukan</th>";
    }
  }

  const sum = dataBarang.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const totalBayar = document.getElementById("total_bayar");
  totalBayar.innerHTML = sum;
}

function cekTotalHarga(jenisBarang, jumlah) {
  if (jenisBarang == "Kopi") {
    const total = jumlah * 3000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Gula") {
    const total = jumlah * 10000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Beras") {
    const total = jumlah * 15000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Minyak") {
    const total = jumlah * 18000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Indomie") {
    const total = jumlah * 5000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Garam") {
    const total = jumlah * 2000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } 
}

function addBarang() {
  var jenisBarang = document.getElementById("jenis_barang").value;
  var jumlah = document.getElementById("jumlah").value;

  const newDataBarang = cekTotalHarga(jenisBarang, jumlah);
  dataBarang.push(newDataBarang);
  showBarang();
}

function editBarang(id) {
  var newjumlah = prompt("Edit jumlah", dataBarang[id].jumlah);
  const detailJenisBarang = dataBarang[id].nama_barang;

  const newDataBarang = cekTotalHarga(
    detailJenisBarang,
    newjumlah || dataBarang[id].jumlah
  );

  dataBarang[id] = newDataBarang;
  showBarang();
}

function deleteBarang(id) {
  swal("Apakah anda yakin ?", {
      buttons: {
        cancel: "Batal!",
        catch: {
          text: "Hapus!",
          value: "Delete",
        },
        // defeat: true,
      },
    })
    .then((value) => {
      switch (value) {

        case "Cancel":
          swal("Data tidak dihapus");
          break;

        case "Delete":
          dataBarang.splice(id, 1);
          showBarang();
          swal("", "Data Berhasil dihapus!", "success");
          break;

        default:
          swal("Data Batal dihapus");
      }
    });
  // dataBarang.splice(id, 1);

}

showBarang();

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function kembalian() {
  const sum = dataBarang.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const bayar = parseInt(document.getElementById("pembayaran").value);
  const total = sum;
  const kembalian = bayar - total;

  document.getElementById("kembalian").innerHTML = kembalian;
  document.getElementById("bayar").innerHTML = bayar;

}