// https://www.omnicalculator.com/finance/goodwill

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const goodwillRadio = document.getElementById('goodwillRadio');
const purchasepriceRadio = document.getElementById('purchasepriceRadio');
const fairvalueoftheassetRadio = document.getElementById('fairvalueoftheassetRadio');
const fairvalueoftheliabilitiesRadio = document.getElementById('fairvalueoftheliabilitiesRadio');

let goodwill;
let purchaseprice = v1;
let fairvalueoftheasset = v2;
let fairvalueoftheliabilities = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

goodwillRadio.addEventListener('click', function() {
  variable1.textContent = 'Purchase price';
  variable2.textContent = 'Fair value of the asset';
  variable3.textContent = 'Fair value of the liabilities';
  purchaseprice = v1;
  fairvalueoftheasset = v2;
  fairvalueoftheliabilities = v3;
  result.textContent = '';
});

purchasepriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Goodwill';
  variable2.textContent = 'Fair value of the asset';
  variable3.textContent = 'Fair value of the liabilities';
  goodwill = v1;
  fairvalueoftheasset = v2;
  fairvalueoftheliabilities = v3;
  result.textContent = '';
});

fairvalueoftheassetRadio.addEventListener('click', function() {
  variable1.textContent = 'Goodwill';
  variable2.textContent = 'Purchase price';
  variable3.textContent = 'Fair value of the liabilities';
  goodwill = v1;
  purchaseprice = v2;
  fairvalueoftheliabilities = v3;
  result.textContent = '';
});

fairvalueoftheliabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Goodwill';
  variable2.textContent = 'Purchase price';
  variable3.textContent = 'Fair value of the asset';
  goodwill = v1;
  purchaseprice = v2;
  fairvalueoftheasset = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(goodwillRadio.checked)
    result.textContent = `Goodwill = ${computegoodwill().toFixed(2)}`;

  else if(purchasepriceRadio.checked)
    result.textContent = `Purchase price = ${computepurchaseprice().toFixed(2)}`;

  else if(fairvalueoftheassetRadio.checked)
    result.textContent = `Fair value of the asset = ${computefairvalueoftheasset().toFixed(2)}`;

  else if(fairvalueoftheliabilitiesRadio.checked)
    result.textContent = `Fair value of the liabilities = ${computefairvalueoftheliabilities().toFixed(2)}`;
})

// calculation

// goodwill = purchase price - market value of assets + market value of liabilities

function computegoodwill() {
  return Number(purchaseprice.value) - Number(fairvalueoftheasset.value) + Number(fairvalueoftheliabilities.value);
}

function computepurchaseprice() {
  return Number(goodwill.value) + Number(fairvalueoftheasset.value) - Number(fairvalueoftheliabilities.value);
}

function computefairvalueoftheasset() {
  return Number(purchaseprice.value) - Number(goodwill.value) + Number(fairvalueoftheliabilities.value);
}

function computefairvalueoftheliabilities() {
  return Number(goodwill.value) - Number(purchaseprice.value) + Number(fairvalueoftheasset.value);
}