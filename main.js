// Je récupère Id 'afficher' et j'affecte un fonction qui va lui permettre d'afficher le text
// A l'aide de l'évènement click, je permet a Id d'afficher le text avec la fonction
document.getElementById('afficher').addEventListener('click', function()
{
 document.getElementById('text').style.display = 'block';
});
// Je récupère Id 'masquer' et j'affecte un fonction qui va lui permettre d'afficher le text
// A l'aide de l'évènement click, je permet a Id de masquer le text avec la fonction 
document.getElementById('masquer').addEventListener('click', function()
{
 document.getElementById('text').style.display = 'none';
});
