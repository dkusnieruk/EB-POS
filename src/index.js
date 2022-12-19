import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery2 = new SimpleLightbox('.gallery2 a', {
  captionsData: `alt`,
  captionDelay: 250,
  swipeClose: true,
});
gallery.on('show.simplelightbox', function () {});
