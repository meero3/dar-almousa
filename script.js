// القائمة للجوال
document.getElementById('menuBtn').addEventListener('click', function(){
  document.getElementById('nav').classList.toggle('open');
});
document.querySelectorAll('.nav a').forEach(function(a){
  a.addEventListener('click', function(){
    document.getElementById('nav').classList.remove('open');
  });
});

// نموذج التسجيل (تجريبي - يحفظ محلياً)
function submitForm(e){
  e.preventDefault();
  var msg = document.getElementById('formMsg');
  msg.textContent = '✅ تم استلام طلبك بنجاح! ستتواصل معك إدارة الدار قريباً.';
  e.target.reset();
  return false;
}

// تمرير ناعم
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click', function(e){
    var t = document.querySelector(a.getAttribute('href'));
    if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); }
  });
});
