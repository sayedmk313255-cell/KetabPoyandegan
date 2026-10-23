/* KetabPoyandegan — Cinematic Dashboard */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ========== DATA ========== */
const books = [
  { id: "b1", title: "شازده کوچولو", en: "The Little Prince", author: "آنتوان دو سنت‌اگزوپری", authorEn: "Antoine de Saint-Exupéry", year: "1943", genre: "فلسفی", genreEn: "Philosophical", rating: 4.8, pages: "96", desc: "خلبانی در دل بیابان با شاهزاده‌ای کوچک آشنا می‌شود؛ سفری شاعرانه درباره‌ی دوستی، عشق و چیزهایی که با چشم دیده نمی‌شوند.", descEn: "A pilot stranded in the desert meets a little prince; a poetic journey about friendship, love and the things that are invisible to the eye.", cover: "https://covers.openlibrary.org/b/id/10521270-L.jpg", popular: 100 },
  { id: "b2", title: "۱۹۸۴", en: "Nineteen Eighty-Four", author: "جورج اورول", authorEn: "George Orwell", year: "1949", genre: "پادآرمان‌شهری", genreEn: "Dystopian", rating: 4.7, pages: "328", desc: "وینستون در جامعه‌ای زندگی می‌کند که حکومت حتی افکار مردم را زیر نظر دارد.", descEn: "Winston lives in a society where the government watches even people's thoughts.", cover: "https://covers.openlibrary.org/b/id/12645130-L.jpg", popular: 99 },
  { id: "b3", title: "قلعه حیوانات", en: "Animal Farm", author: "جورج اورول", authorEn: "George Orwell", year: "1945", genre: "تمثیلی", genreEn: "Allegory", rating: 4.6, pages: "144", desc: "حیوانات مزرعه علیه صاحبشان شورش می‌کنند؛ اما رؤیای برابری کم‌کم جای خود را به قدرت‌طلبی می‌دهد.", descEn: "Farm animals rebel against their owner, but the dream of equality slowly turns into a struggle for power.", cover: "https://covers.openlibrary.org/b/id/11153215-L.jpg", popular: 98 },
  { id: "b4", title: "هری پاتر و سنگ جادو", en: "Harry Potter and the Philosopher's Stone", author: "جی.کی. رولینگ", authorEn: "J.K. Rowling", year: "1997", genre: "فانتزی", genreEn: "Fantasy", rating: 4.9, pages: "320", desc: "هری می‌فهمد جادوگر است و وارد مدرسه‌ی هاگوارتز می‌شود.", descEn: "Harry discovers he is a wizard and enters Hogwarts School of Witchcraft and Wizardry.", cover: "https://covers.openlibrary.org/b/id/10521258-L.jpg", popular: 97 },
  { id: "b5", title: "هابیت", en: "The Hobbit", author: "جی.آر.آر. تالکین", authorEn: "J.R.R. Tolkien", year: "1937", genre: "فانتزی", genreEn: "Fantasy", rating: 4.7, pages: "310", desc: "بیلبو بگینز راهی سفری خطرناک برای یافتن گنج اژدها می‌شود.", descEn: "Bilbo Baggins embarks on a dangerous journey to find a dragon's treasure.", cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg", popular: 96 },
  { id: "b6", title: "کیمیاگر", en: "The Alchemist", author: "پائولو کوئیلو", authorEn: "Paulo Coelho", year: "1988", genre: "ماجراجویی", genreEn: "Adventure", rating: 4.5, pages: "208", desc: "چوپانی جوان برای دنبال کردن رؤیایش سفر می‌کند.", descEn: "A young shepherd travels in pursuit of his dream and learns that the journey itself matters most.", cover: "https://covers.openlibrary.org/b/id/8101016-L.jpg", popular: 94 },
  { id: "b7", title: "تلماسه", en: "Dune", author: "فرانک هربرت", authorEn: "Frank Herbert", year: "1965", genre: "علمی‌تخیلی", genreEn: "Sci-Fi", rating: 4.6, pages: "688", desc: "در سیاره‌ای بیابانی، خانواده‌ای نجیب درگیر توطئه‌های سیاسی و راز ادویه می‌شود.", descEn: "On a desert planet, a noble family becomes entangled in political intrigue and the secret of the spice.", cover: "https://covers.openlibrary.org/b/id/12818064-L.jpg", popular: 93 },
  { id: "b8", title: "عادت‌های اتمی", en: "Atomic Habits", author: "جیمز کلیر", authorEn: "James Clear", year: "2018", genre: "خودسازی", genreEn: "Self-Help", rating: 4.7, pages: "320", desc: "چگونه تغییرات کوچک و مداوم می‌توانند زندگی را متحول کنند.", descEn: "How tiny, consistent changes can transform your life.", cover: "https://covers.openlibrary.org/b/id/10958325-L.jpg", popular: 92 },
  { id: "b9", title: "کشتن مرغ مقلد", en: "To Kill a Mockingbird", author: "هارپر لی", authorEn: "Harper Lee", year: "1960", genre: "ادبیات", genreEn: "Literary", rating: 4.8, pages: "336", desc: "داستان کودکی در جنوب آمریکا که با بی‌عدالتی و شجاعت روبه‌رو می‌شود.", descEn: "A childhood story in the American South confronting injustice and courage.", cover: "https://covers.openlibrary.org/b/id/12078115-L.jpg", popular: 91 },
  { id: "b10", title: "انسان خردمند", en: "Sapiens", author: "یووال نوح هراری", authorEn: "Yuval Noah Harari", year: "2011", genre: "تاریخ", genreEn: "History", rating: 4.6, pages: "512", desc: "روایتی از تاریخ بشر از عصر حجر تا عصر حاضر.", descEn: "A brief history of humankind from the Stone Age to the present.", cover: "https://covers.openlibrary.org/b/id/10523362-L.jpg", popular: 90 },
  { id: "b11", title: "و آنگاه هیچ‌کدام باقی نماندند", en: "And Then There Were None", author: "آگاتا کریستی", authorEn: "Agatha Christie", year: "1939", genre: "معمایی", genreEn: "Mystery", rating: 4.5, pages: "272", desc: "ده غریبه به جزیره‌ای دعوت می‌شوند و یکی‌یکی از بین می‌روند.", descEn: "Ten strangers are invited to an island and are killed one by one.", cover: "https://covers.openlibrary.org/b/id/10521571-L.jpg", popular: 89 },
  { id: "b12", title: "مریخی", en: "The Martian", author: "اندی ویر", authorEn: "Andy Weir", year: "2011", genre: "علمی‌تخیلی", genreEn: "Sci-Fi", rating: 4.6, pages: "384", desc: "فضانوردی که روی مریخ جا مانده، برای زنده ماندن با علم و طنز می‌جنگد.", descEn: "An astronaut stranded on Mars fights to survive with science and humor.", cover: "https://covers.openlibrary.org/b/id/8432047-L.jpg", popular: 88 },
  { id: "b13", title: "غرور و تعصب", en: "Pride and Prejudice", author: "جین آستن", authorEn: "Jane Austen", year: "1813", genre: "عاشقانه", genreEn: "Romance", rating: 4.5, pages: "432", desc: "الیزابت بنت و آقای دارسی با پیش‌داوری‌ها و عشق روبه‌رو می‌شوند.", descEn: "Elizabeth Bennet and Mr. Darcy confront prejudice and discover love.", cover: "https://covers.openlibrary.org/b/id/12646523-L.jpg", popular: 87 },
  { id: "b14", title: "پیرمرد و دریا", en: "The Old Man and the Sea", author: "ارنست همینگوی", authorEn: "Ernest Hemingway", year: "1952", genre: "ادبیات", genreEn: "Literary", rating: 4.4, pages: "128", desc: "پیرمردی و نبردی حماسی با یک ماهی بزرگ در دریا.", descEn: "An old man and his epic struggle with a giant fish at sea.", cover: "https://covers.openlibrary.org/b/id/8231851-L.jpg", popular: 85 },
  { id: "b15", title: "دراکولا", en: "Dracula", author: "برام استوکر", authorEn: "Bram Stoker", year: "1897", genre: "وحشت", genreEn: "Horror", rating: 4.3, pages: "418", desc: "کنت دراکولا از ترانسیلوانیا به لندن می‌آید.", descEn: "Count Dracula travels from Transylvania to London.", cover: "https://covers.openlibrary.org/b/id/8235116-L.jpg", popular: 84 },
  { id: "b16", title: "بینوایان", en: "Les Misérables", author: "ویکتور هوگو", authorEn: "Victor Hugo", year: "1862", genre: "تاریخی", genreEn: "Historical", rating: 4.7, pages: "1463", desc: "داستان ژان والژان و تلاش برای رستگاری در فرانسهٔ قرن نوزدهم.", descEn: "The story of Jean Valjean and the quest for redemption in 19th-century France.", cover: "https://covers.openlibrary.org/b/id/8231847-L.jpg", popular: 86 },
  { id: "b17", title: "بیگانه", en: "The Stranger", author: "آلبر کامو", authorEn: "Albert Camus", year: "1942", genre: "فلسفی", genreEn: "Philosophical", rating: 4.4, pages: "123", desc: "مردی که در برابر بی‌معنایی جهان واکنش نشان می‌دهد.", descEn: "A man who confronts the absurdity of the world.", cover: "https://covers.openlibrary.org/b/id/10523338-L.jpg", popular: 83 },
  { id: "b18", title: "مردی به نام اوه", en: "A Man Called Ove", author: "فردریک بکمن", authorEn: "Fredrik Backman", year: "2012", genre: "درام", genreEn: "Drama", rating: 4.6, pages: "337", desc: "مردی بداخلاق که همسایه‌های جدید زندگی‌اش را تغییر می‌دهند.", descEn: "A grumpy man whose new neighbors change his life.", cover: "https://covers.openlibrary.org/b/id/8314786-L.jpg", popular: 82 },
  { id: "b19", title: "دختری در قطار", en: "The Girl on the Train", author: "پائولا هاکینز", authorEn: "Paula Hawkins", year: "2015", genre: "هیجانی", genreEn: "Thriller", rating: 4.2, pages: "336", desc: "زنی که هر روز از قطار صحنه‌ای را می‌بیند و درگیر یک راز می‌شود.", descEn: "A woman who sees a scene from the train every day and becomes entangled in a mystery.", cover: "https://covers.openlibrary.org/b/id/7894861-L.jpg", popular: 80 },
  { id: "b20", title: "دور دنیا در هشتاد روز", en: "Around the World in Eighty Days", author: "ژول ورن", authorEn: "Jules Verne", year: "1873", genre: "ماجراجویی", genreEn: "Adventure", rating: 4.4, pages: "256", desc: "فیلس فاگ شرط می‌بندد که در هشتاد روز دور دنیا را بگردد.", descEn: "Phileas Fogg bets he can travel around the world in eighty days.", cover: "https://covers.openlibrary.org/b/id/8232046-L.jpg", popular: 81 }
,
{ id: "m25", title: "Squid Game", fa: "بازی مرکب", type: "series", year: 2021, creator: "Hwang Dong-hyuk", creatorFa: "هوانگ دونگ‌هیوک", genre: "Thriller", genreFa: "هیجانی", rating: 8.0, runtime: "2 seasons", runtimeFa: "۲ فصل", desc: "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize.", descFa: "صدها نفر فقیر در بازی‌های کودکانه برای جایزه‌ای وسوسه‌انگیز شرکت می‌کنند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FdDlEmu3EZ0Pgg93K2SVNLCjCSvA.jpg&w=500&h=750&fit=cover&output=webp", popular: 97 },
  { id: "m26", title: "Spider-Man: Across the Spider-Verse", fa: "مرد عنکبوتی: در میان دنیای عنکبوتی", type: "animation", year: 2023, creator: "Joaquim Dos Santos", creatorFa: "خواکیم دوس سانتوس", genre: "Animation", genreFa: "انیمیشن", rating: 8.6, runtime: "140 min", runtimeFa: "۱۴۰ دقیقه", desc: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People.", descFa: "مایلز مورالس در میان جهان‌های موازی با تیم عنکبوتی‌ها روبه‌رو می‌شود.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg&w=500&h=750&fit=cover&output=webp", popular: 96 },
  { id: "m27", title: "Spider-Man: No Way Home", fa: "مرد عنکبوتی: راهی به خانه نیست", type: "movie", year: 2021, creator: "Jon Watts", creatorFa: "جان واتس", genre: "Action", genreFa: "اکشن", rating: 8.2, runtime: "148 min", runtimeFa: "۱۴۸ دقیقه", desc: "Peter Parker's secret identity is revealed, and he asks Doctor Strange for help.", descFa: "هویت مخفی پیتر پارکر فاش می‌شود و او از دکتر استرنج کمک می‌خواهد.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F1g0dhYtq4irTY1GPXvft6k4YLjm.jpg&w=500&h=750&fit=cover&output=webp", popular: 95 },
  { id: "m28", title: "Stranger Things", fa: "چیزهای عجیب", type: "series", year: 2016, creator: "The Duffer Brothers", creatorFa: "برادران دافر", genre: "Sci-Fi", genreFa: "علمی‌تخیلی", rating: 8.7, runtime: "4+ seasons", runtimeFa: "۴+ فصل", desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments and supernatural forces.", descFa: "ناپدید شدن یک پسر، شهر کوچکی را با آزمایش‌های مخفی و نیروهای فراطبیعی روبه‌رو می‌کند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F49WJfeN0moxb9IPfGn8AIqMGskD.jpg&w=500&h=750&fit=cover&output=webp", popular: 96 },
  { id: "m29", title: "The Boys", fa: "پسران", type: "series", year: 2019, creator: "Eric Kripke", creatorFa: "اریک کریپکی", genre: "Action", genreFa: "اکشن", rating: 8.7, runtime: "4 seasons", runtimeFa: "۴ فصل", desc: "A group of vigilantes set out to take down corrupt superheroes who abuse their powers.", descFa: "گروهی از عدالت‌جویان تصمیم می‌گیرند ابرقهرمان‌های فاسد را سرنگون کنند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FmY7SeH4HFFxH1cyEqzLQXWc4fFb.jpg&w=500&h=750&fit=cover&output=webp", popular: 93 },
  { id: "m30", title: "Dune: Part Two", fa: "تلماسه: بخش دوم", type: "movie", year: 2024, creator: "Denis Villeneuve", creatorFa: "دنیس ویلنوو", genre: "Sci-Fi", genreFa: "علمی‌تخیلی", rating: 8.5, runtime: "166 min", runtimeFa: "۱۶۶ دقیقه", desc: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators.", descFa: "پل آتریدس با چانی و فرمن‌ها متحد می‌شود تا انتقام بگیرد.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg&w=500&h=750&fit=cover&output=webp", popular: 94 },
  { id: "m31", title: "Oppenheimer", fa: "اوپنهایمر", type: "movie", year: 2023, creator: "Christopher Nolan", creatorFa: "کریستوفر نولان", genre: "Drama", genreFa: "درام", rating: 8.3, runtime: "180 min", runtimeFa: "۱۸۰ دقیقه", desc: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.", descFa: "داستان رابرت اوپنهایمر و نقش او در ساخت بمب اتمی.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F8Gxv8gSFCU0XGDykE0UmQ08xGog.jpg&w=500&h=750&fit=cover&output=webp", popular: 92 },
  { id: "m32", title: "Your Name", fa: "اسم تو", type: "animation", year: 2016, creator: "Makoto Shinkai", creatorFa: "ماکوتو شینکای", genre: "Animation", genreFa: "انیمیشن", rating: 8.4, runtime: "106 min", runtimeFa: "۱۰۶ دقیقه", desc: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance keep them apart?", descFa: "دو غریبه به شکلی عجیب به هم متصل می‌شوند و سرنوشتشان تغییر می‌کند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2Fq719jXXEzOoYaps6babgKnONONX.jpg&w=500&h=750&fit=cover&output=webp", popular: 91 },
  { id: "m33", title: "Spirited Away", fa: "شهر اشباح", type: "animation", year: 2001, creator: "Hayao Miyazaki", creatorFa: "هایائو میازاکی", genre: "Animation", genreFa: "انیمیشن", rating: 8.6, runtime: "125 min", runtimeFa: "۱۲۵ دقیقه", desc: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods and witches.", descFa: "دختری ده ساله وارد دنیای خدایان و جادوگران می‌شود.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F39wmItIWsg5sZMyRUHLkWBcuVCM.jpg&w=500&h=750&fit=cover&output=webp", popular: 95 },
  { id: "m34", title: "Howl's Moving Castle", fa: "قلعه متحرک هاول", type: "animation", year: 2004, creator: "Hayao Miyazaki", creatorFa: "هایائو میازاکی", genre: "Animation", genreFa: "انیمیشن", rating: 8.2, runtime: "119 min", runtimeFa: "۱۱۹ دقیقه", desc: "An 18-year-old is transformed by a witch into an old woman and seeks help from a wizard.", descFa: "دختری ۱۸ ساله توسط جادوگری به پیرزن تبدیل می‌شود و از جادوگری کمک می‌خواهد.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FTkTPELv4kCAneVDjdabCUeYxg.jpg&w=500&h=750&fit=cover&output=webp", popular: 88 },
  { id: "m35", title: "Coco", fa: "کوکو", type: "animation", year: 2017, creator: "Lee Unkrich", creatorFa: "لی آنکریچ", genre: "Animation", genreFa: "انیمیشن", rating: 8.4, runtime: "105 min", runtimeFa: "۱۰۵ دقیقه", desc: "Aspiring musician Miguel enters the Land of the Dead to find his great-great-grandfather.", descFa: "میگل وارد سرزمین مردگان می‌شود تا پدربزرگش را پیدا کند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FgGMoqORRFIPDf0EHZBJ9WP9DV0B.jpg&w=500&h=750&fit=cover&output=webp", popular: 89 },
  { id: "m36", title: "Inside Out 2", fa: "درون و بیرون ۲", type: "animation", year: 2024, creator: "Kelsey Mann", creatorFa: "کلسی مان", genre: "Animation", genreFa: "انیمیشن", rating: 7.7, runtime: "96 min", runtimeFa: "۹۶ دقیقه", desc: "Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions!", descFa: "ستاد ذهن رایلی برای ورود احساسات جدید دستخوش تغییر می‌شود.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FvpnVM9B6NMmQpWeZvzLvDESb2QY.jpg&w=500&h=750&fit=cover&output=webp", popular: 87 },
  { id: "m37", title: "The Wild Robot", fa: "ربات وحشی", type: "animation", year: 2024, creator: "Chris Sanders", creatorFa: "کریس سندرز", genre: "Animation", genreFa: "انیمیشن", rating: 8.3, runtime: "102 min", runtimeFa: "۱۰۲ دقیقه", desc: "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island.", descFa: "رباتی هوشمند پس از کشتی‌شکستگی در جزیره‌ای متروک گیر می‌افتد.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FwTnV3PCVW5O92JMrFvvrRcV39PU.jpg&w=500&h=750&fit=cover&output=webp", popular: 90 },
  { id: "m38", title: "Demon Slayer: Mugen Train", fa: "قاتل شیاطین: قطار بی‌نهایت", type: "animation", year: 2020, creator: "Haruo Sotozaki", creatorFa: "هاروئو سوتوزاکی", genre: "Animation", genreFa: "انیمیشن", rating: 8.2, runtime: "117 min", runtimeFa: "۱۱۷ دقیقه", desc: "Tanjiro and his friends join the Flame Hashira on a mission aboard the Mugen Train.", descFa: "تانجیرو و دوستانش در مأموریتی روی قطار موزن شرکت می‌کنند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2Fh8Rb9gBr48ODIwYUttZNYeMWeUU.jpg&w=500&h=750&fit=cover&output=webp", popular: 88 },
  { id: "m39", title: "Jujutsu Kaisen 0", fa: "جوجوتسو کایسن ۰", type: "animation", year: 2021, creator: "Sunghoo Park", creatorFa: "سونگهو پارک", genre: "Animation", genreFa: "انیمیشن", rating: 7.8, runtime: "105 min", runtimeFa: "۱۰۵ دقیقه", desc: "Yuta Okkotsu seeks help from the Tokyo Jujutsu High to control the curse of Rika.", descFa: "یوتا برای کنترل نفرین ریکا به مدرسه جوجوتسو می‌رود.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F23oJaeBh0FHivfDISiCxxUg0f7K.jpg&w=500&h=750&fit=cover&output=webp", popular: 85 },
  { id: "m40", title: "Avatar: The Way of Water", fa: "آواتار: راه آب", type: "movie", year: 2022, creator: "James Cameron", creatorFa: "جیمز کامرون", genre: "Sci-Fi", genreFa: "علمی‌تخیلی", rating: 7.6, runtime: "192 min", runtimeFa: "۱۹۲ دقیقه", desc: "Jake Sully and Ney'tiri have formed a family and are forced to leave their home.", descFa: "جیک سالی و نیتیری مجبور می‌شوند خانه‌شان را ترک کنند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2Ft6HIqrRAclMCA60NsSmeqe9RmNV.jpg&w=500&h=750&fit=cover&output=webp", popular: 91 },
  { id: "m41", title: "The Batman", fa: "بتمن", type: "movie", year: 2022, creator: "Matt Reeves", creatorFa: "مت ریوز", genre: "Crime", genreFa: "جنایی", rating: 7.8, runtime: "176 min", runtimeFa: "۱۷۶ دقیقه", desc: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.", descFa: "بتمن وارد دنیای زیرزمینی گاتهام می‌شود تا قاتلی سریالی را پیدا کند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F74xTEgt7R36Fpooo50r9T25onhq.jpg&w=500&h=750&fit=cover&output=webp", popular: 89 },
  { id: "m42", title: "Wednesday", fa: "ونزدی", type: "series", year: 2022, creator: "Alfred Gough", creatorFa: "آلفرد گاف", genre: "Comedy", genreFa: "کمدی", rating: 8.1, runtime: "1+ seasons", runtimeFa: "۱+ فصل", desc: "Wednesday Addams investigates a murder spree while making new friends at Nevermore Academy.", descFa: "ونزدی آدامز در مدرسه نورمور یک سری قتل را بررسی می‌کند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F9PFonBhy4cQy7Jz20NpMygczOkv.jpg&w=500&h=750&fit=cover&output=webp", popular: 90 },
  { id: "m43", title: "House of the Dragon", fa: "خاندان اژدها", type: "series", year: 2022, creator: "Ryan Condal", creatorFa: "رایان کاندال", genre: "Fantasy", genreFa: "فانتزی", rating: 8.4, runtime: "2 seasons", runtimeFa: "۲ فصل", desc: "The story of House Targaryen set 200 years before the events of Game of Thrones.", descFa: "داستان خاندان تارگرین ۲۰۰ سال قبل از بازی تاج‌وتخت.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F7QMsRTExiPCZDhvNySStiDx0Q2R.jpg&w=500&h=750&fit=cover&output=webp", popular: 92 },
  { id: "m44", title: "Fallout", fa: "فال‌اوت", type: "series", year: 2024, creator: "Geneva Robertson-Dworet", creatorFa: "ژنووا رابرتسون", genre: "Sci-Fi", genreFa: "علمی‌تخیلی", rating: 8.4, runtime: "1 season", runtimeFa: "۱ فصل", desc: "In a post-apocalyptic world, a young woman leaves her sheltered life to find her father.", descFa: "در دنیای پس از آخرالزمان، دختری برای پیدا کردن پدرش از پناهگاه خارج می‌شود.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg&w=500&h=750&fit=cover&output=webp", popular: 91 }
,
{ id: "b21", title: "پرنده تیغ‌دار", en: "The Nightingale", author: "کریستین هانا", authorEn: "Kristin Hannah", year: "2015", genre: "تاریخی", genreEn: "Historical", rating: 4.6, pages: "440", desc: "داستان دو خواهر در فرانسه اشغال‌شده در جنگ جهانی دوم.", descEn: "The story of two sisters in Nazi-occupied France during WWII.", cover: "https://covers.openlibrary.org/b/id/8515311-L.jpg", popular: 79 },
  { id: "b22", title: "هری پاتر و تالار اسرار", en: "Harry Potter and the Chamber of Secrets", author: "جی.کی. رولینگ", authorEn: "J.K. Rowling", year: "1998", genre: "فانتزی", genreEn: "Fantasy", rating: 4.7, pages: "352", desc: "هری به سال دوم هاگوارتز برمی‌گردد و با راز اتاق اسرار روبه‌رو می‌شود.", descEn: "Harry returns for his second year and faces the Chamber of Secrets.", cover: "https://covers.openlibrary.org/b/id/10521261-L.jpg", popular: 88 },
  { id: "b23", title: "ارباب حلقه‌ها: یاران حلقه", en: "The Fellowship of the Ring", author: "جی.آر.آر. تالکین", authorEn: "J.R.R. Tolkien", year: "1954", genre: "فانتزی", genreEn: "Fantasy", rating: 4.8, pages: "423", desc: "فروودو سفر خطرناک برای نابودی حلقه‌ی یگانه را آغاز می‌کند.", descEn: "Frodo begins a dangerous journey to destroy the One Ring.", cover: "https://covers.openlibrary.org/b/id/9259256-L.jpg", popular: 95 },
  { id: "b24", title: "صد سال تنهایی", en: "One Hundred Years of Solitude", author: "گابریل گارسیا مارکز", authorEn: "Gabriel García Márquez", year: "1967", genre: "ادبیات", genreEn: "Literary", rating: 4.5, pages: "417", desc: "داستان خاندان بوئندیا در شهر خیالی ماکوندو.", descEn: "The multi-generational story of the Buendía family in Macondo.", cover: "https://covers.openlibrary.org/b/id/10523345-L.jpg", popular: 87 },
  { id: "b25", title: "گتسبی بزرگ", en: "The Great Gatsby", author: "اف. اسکات فیتزجرالد", authorEn: "F. Scott Fitzgerald", year: "1925", genre: "ادبیات", genreEn: "Literary", rating: 4.4, pages: "180", desc: "داستان ثروت، عشق و رویای آمریکایی در دهه ۱۹۲۰.", descEn: "A story of wealth, love and the American Dream in the 1920s.", cover: "https://covers.openlibrary.org/b/id/10521295-L.jpg", popular: 86 },
  { id: "b26", title: "جنایت و مکافات", en: "Crime and Punishment", author: "فئودور داستایفسکی", authorEn: "Fyodor Dostoevsky", year: "1866", genre: "فلسفی", genreEn: "Philosophical", rating: 4.6, pages: "671", desc: "دانشجویی فقیر مرتکب قتلی می‌شود و با عذاب وجدان روبه‌رو می‌گردد.", descEn: "A poor student commits a murder and faces the torment of conscience.", cover: "https://covers.openlibrary.org/b/id/8231496-L.jpg", popular: 85 },
  { id: "b27", title: "فارنهایت ۴۵۱", en: "Fahrenheit 451", author: "ری بردبری", authorEn: "Ray Bradbury", year: "1953", genre: "پادآرمان‌شهری", genreEn: "Dystopian", rating: 4.5, pages: "249", desc: "در جامعه‌ای که کتاب‌ها سوزانده می‌شوند، یک آتش‌نشان شروع به پرسیدن می‌کند.", descEn: "In a society where books are burned, a fireman begins to question everything.", cover: "https://covers.openlibrary.org/b/id/9255566-L.jpg", popular: 84 },
  { id: "b28", title: "نغمه یخ و آتش: بازی تاج و تخت", en: "A Game of Thrones", author: "جرج آر.آر. مارتین", authorEn: "George R.R. Martin", year: "1996", genre: "فانتزی", genreEn: "Fantasy", rating: 4.7, pages: "694", desc: "نبرد خاندان‌ها برای تاج و تخت آهنین در وستروس.", descEn: "Noble families fight for the Iron Throne in Westeros.", cover: "https://covers.openlibrary.org/b/id/9259251-L.jpg", popular: 93 },
  { id: "b29", title: "اثر مرکب", en: "The Compound Effect", author: "دارن هاردی", authorEn: "Darren Hardy", year: "2010", genre: "خودسازی", genreEn: "Self-Help", rating: 4.5, pages: "176", desc: "چگونه تصمیم‌های کوچک روزانه نتایج بزرگ می‌سازند.", descEn: "How small daily decisions create massive results over time.", cover: "https://covers.openlibrary.org/b/id/8235111-L.jpg", popular: 78 },
  { id: "b30", title: "قوی سیاه", en: "The Black Swan", author: "نسیم نیکلاس طالب", authorEn: "Nassim Nicholas Taleb", year: "2007", genre: "علمی", genreEn: "Science", rating: 4.3, pages: "400", desc: "درباره رویدادهای نادر و غیرقابل پیش‌بینی که جهان را تغییر می‌دهند.", descEn: "About rare, unpredictable events that change the world.", cover: "https://covers.openlibrary.org/b/id/8231841-L.jpg", popular: 77 }
];

const movies = [
  { id: "m1", title: "Breaking Bad", fa: "برکینگ بد", type: "series", year: 2008, creator: "Vince Gilligan", creatorFa: "وینس گیلیگان", genre: "Crime", genreFa: "جنایی", rating: 9.5, runtime: "5 seasons", runtimeFa: "۵ فصل", desc: "A chemistry teacher diagnosed with cancer turns to manufacturing drugs to secure his family's future.", descFa: "معلم شیمی‌ای که با تشخیص بیماری سخت روبه‌رو شده، برای تأمین آینده‌ی خانواده وارد دنیای تولید مواد مخدر می‌شود.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FggFHVNu6YYI5L9pCfOacjizRGt.jpg&w=500&h=750&fit=cover&output=webp", popular: 100 },
  { id: "m2", title: "Peaky Blinders", fa: "پیکی بلایندرز", type: "series", year: 2013, creator: "Steven Knight", creatorFa: "استیون نایت", genre: "Crime", genreFa: "جنایی", rating: 8.8, runtime: "6 seasons", runtimeFa: "۶ فصل", desc: "A gangster family in post-WWI Birmingham rises to power.", descFa: "خانواده‌ی شلبی در بیرمنگام پس از جنگ جهانی اول برای قدرت و نفوذ می‌جنگند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FvUUqzWa2LnHIVqkaKVlBgevG4A.jpg&w=500&h=750&fit=cover&output=webp", popular: 98 },
  { id: "m3", title: "Game of Thrones", fa: "بازی تاج‌وتخت", type: "series", year: 2011, creator: "D.B. Weiss & David Benioff", creatorFa: "دیوید بنیاف و دی.بی. وایس", genre: "Fantasy", genreFa: "فانتزی", rating: 9.2, runtime: "8 seasons", runtimeFa: "۸ فصل", desc: "Noble families wage war for the Iron Throne while an ancient threat rises in the North.", descFa: "خاندان‌های رقیب برای تخت آهنین می‌جنگند، درحالی‌که تهدیدی باستانی از شمال نزدیک می‌شود.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2Fu3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg&w=500&h=750&fit=cover&output=webp", popular: 99 },
  { id: "m4", title: "Sherlock", fa: "شرلوک", type: "series", year: 2010, creator: "Mark Gatiss & Steven Moffat", creatorFa: "مارک گیتیس و استیون موفات", genre: "Mystery", genreFa: "معمایی", rating: 9.1, runtime: "4 seasons", runtimeFa: "۴ فصل", desc: "Modern-day Sherlock Holmes solves complex cases in London.", descFa: "شرلوک هولمز در لندن امروزی با استدلال‌های بی‌نظیرش پرونده‌های پیچیده را حل می‌کند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F7WTsnHkbA0FaG6R9twfFde0I9hl.jpg&w=500&h=750&fit=cover&output=webp", popular: 95 },
  { id: "m5", title: "Inception", fa: "تلقین", type: "movie", year: 2010, creator: "Christopher Nolan", creatorFa: "کریستوفر نولان", genre: "Sci-Fi", genreFa: "علمی‌تخیلی", rating: 8.8, runtime: "148 min", runtimeFa: "۱۴۸ دقیقه", desc: "A thief who steals secrets through dream-sharing is given a chance to have his crimes forgiven.", descFa: "گروهی متخصص وارد رؤیاهای دیگران می‌شوند؛ این‌بار مأموریتشان کاشتن یک ایده است.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FoYuLEt3zVCKq57qu2F8dT7NIa6f.jpg&w=500&h=750&fit=cover&output=webp", popular: 97 },
  { id: "m6", title: "Interstellar", fa: "میان‌ستاره‌ای", type: "movie", year: 2014, creator: "Christopher Nolan", creatorFa: "کریستوفر نولان", genre: "Sci-Fi", genreFa: "علمی‌تخیلی", rating: 8.7, runtime: "169 min", runtimeFa: "۱۶۹ دقیقه", desc: "A team of explorers travel through a wormhole in search of a new home for humanity.", descFa: "گروهی فضانورد برای یافتن خانه‌ای تازه برای بشر از میان کرم‌چاله سفر می‌کنند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FgEU2QniE6E77NI6lCU6MxlNBvIx.jpg&w=500&h=750&fit=cover&output=webp", popular: 96 },
  { id: "m7", title: "The Dark Knight", fa: "شوالیه‌ی تاریکی", type: "movie", year: 2008, creator: "Christopher Nolan", creatorFa: "کریستوفر نولان", genre: "Action", genreFa: "اکشن", rating: 9.0, runtime: "152 min", runtimeFa: "۱۵۲ دقیقه", desc: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.", descFa: "بتمن با جوکر روبه‌رو می‌شود؛ تبهکاری که گاتهام را به هرج‌ومرج می‌کشاند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FqJ2tW6WMUDux911r6m7haRef0WH.jpg&w=500&h=750&fit=cover&output=webp", popular: 94 },
  { id: "m8", title: "Stranger Things", fa: "چیزهای عجیب", type: "series", year: 2016, creator: "The Duffer Brothers", creatorFa: "برادران دافر", genre: "Sci-Fi", genreFa: "علمی‌تخیلی", rating: 8.7, runtime: "4 seasons", runtimeFa: "۴ فصل", desc: "A group of kids in a small town encounter secret experiments and a mysterious alternate dimension.", descFa: "ناپدیدشدن پسری در شهری کوچک، گروهی از دوستان را با آزمایش‌های مخفی و جهانی مرموز روبه‌رو می‌کند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2Fx2LSRK2Cm7MZhjluni1msVJ3wDF.jpg&w=500&h=750&fit=cover&output=webp", popular: 93 },
  { id: "m9", title: "The Shawshank Redemption", fa: "رستگاری در شاوشنک", type: "movie", year: 1994, creator: "Frank Darabont", creatorFa: "فرانک دارابونت", genre: "Drama", genreFa: "درام", rating: 9.3, runtime: "142 min", runtimeFa: "۱۴۲ دقیقه", desc: "Two imprisoned men bond over years, finding solace and eventual redemption through acts of common decency.", descFa: "دو زندانی در طول سال‌ها دوستی عمیقی پیدا می‌کنند و راه رستگاری را می‌یابند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg&w=500&h=750&fit=cover&output=webp", popular: 99 },
  { id: "m10", title: "The Godfather", fa: "پدرخوانده", type: "movie", year: 1972, creator: "Francis Ford Coppola", creatorFa: "فرانسیس فورد کوپولا", genre: "Crime", genreFa: "جنایی", rating: 9.2, runtime: "175 min", runtimeFa: "۱۷۵ دقیقه", desc: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.", descFa: "رئیس سالخورده یک خاندان مافیایی کنترل را به پسر بی‌میل خود واگذار می‌کند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F3bhkrj58Vtu7enYsRolD1fZdja1.jpg&w=500&h=750&fit=cover&output=webp", popular: 98 },
  { id: "m11", title: "Dark", fa: "دارک", type: "series", year: 2017, creator: "Baran bo Odar", creatorFa: "باران بو اودار", genre: "Sci-Fi", genreFa: "علمی‌تخیلی", rating: 8.7, runtime: "3 seasons", runtimeFa: "۳ فصل", desc: "A missing child sets four families on a hunt for answers as they uncover a mind-bending mystery involving time travel.", descFa: "ناپدیدشدن یک کودک رازهای چند خانواده و پیوندهای عجیب میان زمان‌ها را آشکار می‌کند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FapbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg&w=500&h=750&fit=cover&output=webp", popular: 91 },
  { id: "m12", title: "Chernobyl", fa: "چرنوبیل", type: "series", year: 2019, creator: "Craig Mazin", creatorFa: "کریگ مازن", genre: "Historical", genreFa: "تاریخی", rating: 9.3, runtime: "Mini-series", runtimeFa: "مینی‌سریال", desc: "The true story of one of the worst man-made catastrophes in history.", descFa: "روایت فاجعه‌ی هسته‌ای چرنوبیل و تلاش دانشمندان برای مهار پیامدهای آن.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FhlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg&w=500&h=750&fit=cover&output=webp", popular: 95 },
  { id: "m13", title: "Dune: Part Two", fa: "تلماسه: بخش دوم", type: "movie", year: 2024, creator: "Denis Villeneuve", creatorFa: "دنیس ویلنوو", genre: "Sci-Fi", genreFa: "علمی‌تخیلی", rating: 8.5, runtime: "166 min", runtimeFa: "۱۶۶ دقیقه", desc: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.", descFa: "پل آتریدیس با چانی و فرمن‌ها متحد می‌شود و به دنبال انتقام از توطئه‌گرانی است که خانواده‌اش را نابود کردند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg&w=500&h=750&fit=cover&output=webp", popular: 92 },
  { id: "m14", title: "The Matrix", fa: "ماتریکس", type: "movie", year: 1999, creator: "The Wachowskis", creatorFa: "واچوفسکی‌ها", genre: "Sci-Fi", genreFa: "علمی‌تخیلی", rating: 8.7, runtime: "136 min", runtimeFa: "۱۳۶ دقیقه", desc: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.", descFa: "هکری که حقیقت واقعیت را کشف می‌کند و نقش خود را در جنگ با کنترل‌کنندگان آن می‌فهمد.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2Ff89U3ADr1oiB1s9GkdPOEpXUk5H.jpg&w=500&h=750&fit=cover&output=webp", popular: 90 },
  { id: "m15", title: "Spirited Away", fa: "شهر اشباح", type: "movie", year: 2001, creator: "Hayao Miyazaki", creatorFa: "هایائو میازاکی", genre: "Animation", genreFa: "انیمیشن", rating: 8.6, runtime: "125 min", runtimeFa: "۱۲۵ دقیقه", desc: "A young girl enters a world of spirits and must find a way to free herself and her parents.", descFa: "دختری جوان وارد دنیای ارواح می‌شود و باید راهی برای آزاد کردن خود و والدینش پیدا کند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F39wmItIWsg5sZMyRUHLkWBcuVCM.jpg&w=500&h=750&fit=cover&output=webp", popular: 89 },
  { id: "m16", title: "The Queen's Gambit", fa: "گامبی وزیر", type: "series", year: 2020, creator: "Scott Frank", creatorFa: "اسکات فرانک", genre: "Drama", genreFa: "درام", rating: 8.5, runtime: "Mini-series", runtimeFa: "مینی‌سریال", desc: "An orphaned chess prodigy rises to the top of the chess world while struggling with addiction.", descFa: "یتیمی نابغه در شطرنج که به اوج دنیای شطرنج می‌رسد و همزمان با اعتیاد می‌جنگد.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FzU0htwkhNvBQdVSIKB9s6hgVeFK.jpg&w=500&h=750&fit=cover&output=webp", popular: 88 },
  { id: "m17", title: "Oppenheimer", fa: "اوپنهایمر", type: "movie", year: 2023, creator: "Christopher Nolan", creatorFa: "کریستوفر نولان", genre: "Historical", genreFa: "تاریخی", rating: 8.3, runtime: "180 min", runtimeFa: "۱۸۰ دقیقه", desc: "The story of J. Robert Oppenheimer and the development of the atomic bomb.", descFa: "داستان جی. رابرت اوپنهایمر و ساخت بمب اتمی.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2Fptpr0kGAckfQkJeJIt8st5dglvd.jpg&w=500&h=750&fit=cover&output=webp", popular: 87 },
  { id: "m18", title: "Parasite", fa: "انگل", type: "movie", year: 2019, creator: "Bong Joon-ho", creatorFa: "بونگ جون‌هو", genre: "Thriller", genreFa: "هیجانی", rating: 8.5, runtime: "132 min", runtimeFa: "۱۳۲ دقیقه", desc: "A poor family schemes to become employed by a wealthy family, leading to an unexpected incident.", descFa: "خانواده‌ای فقیر نقشه می‌کشند تا در خانه‌ی خانواده‌ای ثروتمند کار پیدا کنند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F7IiTTgloJzvGI1TAYymCfbfl3vT.jpg&w=500&h=750&fit=cover&output=webp", popular: 91 },
  { id: "m19", title: "The Lord of the Rings: The Fellowship of the Ring", fa: "ارباب حلقه‌ها: یاران حلقه", type: "movie", year: 2001, creator: "Peter Jackson", creatorFa: "پیتر جکسون", genre: "Fantasy", genreFa: "فانتزی", rating: 8.8, runtime: "178 min", runtimeFa: "۱۷۸ دقیقه", desc: "A meek Hobbit and eight companions set out on a journey to destroy the One Ring.", descFa: "هابیتی فروتن و هشت همراهش راهی سفری برای نابودی حلقه‌ی یگانه می‌شوند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg&w=500&h=750&fit=cover&output=webp", popular: 96 },
  { id: "m20", title: "The Prestige", fa: "پرستیژ", type: "movie", year: 2006, creator: "Christopher Nolan", creatorFa: "کریستوفر نولان", genre: "Mystery", genreFa: "معمایی", rating: 8.5, runtime: "130 min", runtimeFa: "۱۳۰ دقیقه", desc: "Two rival magicians engage in a battle for supremacy that leads to tragedy.", descFa: "دو شعبده‌باز رقیب در رقابتی خطرناک برای برتری درگیر می‌شوند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg&w=500&h=750&fit=cover&output=webp", popular: 86 },
  { id: "m21", title: "Arcane", fa: "آرکین", type: "series", year: 2021, creator: "Christian Linke", creatorFa: "کریستین لینکه", genre: "Animation", genreFa: "انیمیشن", rating: 9.0, runtime: "2 seasons", runtimeFa: "۲ فصل", desc: "The origin story of two legendary champions set in the utopian city of Piltover and the oppressed undercity of Zaun.", descFa: "داستان خاستگاه دو قهرمان افسانه‌ای در شهر اتوپیایی پیل‌تاور و زیرزمین ستم‌دیده‌ی زائون.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2Ffqldf2t8ztc9aiwn3k6mlX3tvRT.jpg&w=500&h=750&fit=cover&output=webp", popular: 90 },
  { id: "m22", title: "The Last of Us", fa: "آخرین بازمانده از ما", type: "series", year: 2023, creator: "Craig Mazin & Neil Druckmann", creatorFa: "کریگ مازن و نیل دراکمن", genre: "Drama", genreFa: "درام", rating: 8.7, runtime: "1+ seasons", runtimeFa: "۱+ فصل", desc: "In a post-apocalyptic world, a smuggler must escort a teenage girl across the United States.", descFa: "در جهانی ویران‌شده، جوئل مأمور همراهی دختری نوجوان می‌شود.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2FuKvVjHNqB5VmOrdxqAt2F7J78ED.jpg&w=500&h=750&fit=cover&output=webp", popular: 94 },
  { id: "m23", title: "Whiplash", fa: "ویپلش", type: "movie", year: 2014, creator: "Damien Chazelle", creatorFa: "دیمین شزل", genre: "Drama", genreFa: "درام", rating: 8.5, runtime: "107 min", runtimeFa: "۱۰۷ دقیقه", desc: "A promising young drummer enrolls at a cut-throat music conservatory.", descFa: "نوازنده‌ی جوان درام در یک هنرستان موسیقی بی‌رحم ثبت‌نام می‌کند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2F7fn624j5lj3xTme2SgiLCeuedmO.jpg&w=500&h=750&fit=cover&output=webp", popular: 85 },
  { id: "m24", title: "Arrival", fa: "ورود", type: "movie", year: 2016, creator: "Denis Villeneuve", creatorFa: "دنیس ویلنوو", genre: "Sci-Fi", genreFa: "علمی‌تخیلی", rating: 7.9, runtime: "116 min", runtimeFa: "۱۱۶ دقیقه", desc: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear.", descFa: "زبان‌شناسی با ارتش همکاری می‌کند تا با موجودات بیگانه ارتباط برقرار کند.", cover: "https://wsrv.nl/?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw500%2Fx2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg&w=500&h=750&fit=cover&output=webp", popular: 84 }
];

/* ========== i18n ========== */
const i18n = {
  fa: {
    "nav.home": "خانه", "nav.books": "کتابخانه", "nav.movies": "فیلم و سریال",
    "nav.favorites": "علاقه‌مندی‌ها", "nav.profile": "پروفایل", "nav.about": "درباره ما",
    "side.quote": "«کتاب‌ها، بهترین دوستان انسان هستند.»",
    "search.placeholder": "جستجو در کتاب‌ها، فیلم‌ها و سریال‌ها...",
    "profile.guest": "مهمان",
    "hero.eyebrow": "کتابخانه‌ی دیجیتال پویندگان",
    "hero.title": "به دنیای بی‌پایان داستان‌ها خوش آمدی!",
    "hero.sub": "اینجا جاییه که کتاب‌ها، فیلم‌ها و سریال‌ها با هم زندگی می‌کنن...",
    "hero.cta1": "شروع کن", "hero.cta2": "بیشتر بدانید",
    "home.popularBooks": "کتاب‌های محبوب", "home.popularMovies": "فیلم و سریال",
    "home.quote": "کسی که کتاب می‌خواند، پیش از آن‌که زندگی کند، هزار زندگی را تجربه می‌کند.",
    "common.viewAll": "مشاهده همه", "common.empty": "چیزی پیدا نشد.",
    "books.title": "کتابخانه پویندگان", "books.sub": "ماجراجویی بعدی‌ات فقط چند صفحه فاصله دارد.",
    "books.search": "اسم کتاب، نویسنده یا موضوع...",
    "movies.title": "فیلم و سریال", "movies.sub": "از معماهای نفس‌گیر تا دنیاهای خیال‌انگیز.",
    "movies.search": "اسم فیلم، کارگردان یا موضوع...",
    "movies.allTypes": "همه", "movies.movies": "فیلم", "movies.series": "سریال", "movies.animation": "انیمیشن",
    "movies.disclaimer": "لینک تماشا شما را به آپارات یا جست‌وجوی معتبر هدایت می‌کند. دسترسی به پخش بستگی به منطقه دارد.",
    "sort.popular": "محبوب‌ترین", "sort.rating": "بالاترین امتیاز", "sort.az": "نام: الف تا ی", "sort.new": "جدیدترها",
    "fav.title": "علاقه‌مندی‌های من", "fav.sub": "کتاب‌ها و فیلم‌هایی که دوست داری اینجا جمع می‌شن.",
    "fav.empty": "هنوز چیزی اضافه نکردی. از کارت‌ها دکمه ♥ رو بزن!",
    "profile.firstName": "نام", "profile.lastName": "نام خانوادگی", "profile.grade": "پایه تحصیلی",
    "profile.lang": "زبان سایت", "profile.save": "ذخیره تغییرات",
    "profile.privacy": "اطلاعات فقط در همین مرورگر ذخیره می‌شود.",
    "profile.statBooks": "کتاب خوانده", "profile.statMovies": "فیلم / سریال", "profile.statFavs": "علاقه‌مندی",
    "about.title": "درباره‌ی پویندگان", "about.sub": "جایی برای کنجکاوی، خیال و پیدا کردن داستان بعدی.",
    "about.h2": "کتاب‌پویندگان چیست؟",
    "about.p": "یک تجربه‌ی دیجیتال دانش‌آموزی برای معرفی کتاب‌ها، فیلم‌ها و سریال‌های ارزشمند. این وب‌سایت به‌عنوان پروژه‌ی کار و فناوری پایه نهم طراحی شده است.",
    "about.p1t": "کتاب‌های منتخب", "about.p1d": "خلاصه و اطلاعات کاربردی",
    "about.p2t": "راهنمای تماشا", "about.p2d": "ژانر، داستان و لینک معتبر",
    "about.p3t": "انتخاب‌های شخصی", "about.p3d": "علاقه‌مندی‌ها و پروفایل",
    "footer.made": "ساخته‌شده با کنجکاوی ✨",
    "detail.watch": "تماشای اثر", "detail.info": "اطلاعات بیشتر", "detail.addFav": "افزودن به علاقه‌مندی‌ها",
    "detail.removeFav": "حذف از علاقه‌مندی‌ها", "detail.pages": "صفحه", "detail.author": "نویسنده",
    "detail.creator": "سازنده", "detail.year": "سال", "detail.genre": "ژانر", "detail.runtime": "مدت",
    "toast.saved": "پروفایل ذخیره شد!", "toast.favAdd": "به علاقه‌مندی‌ها اضافه شد", "toast.favRemove": "از علاقه‌مندی‌ها حذف شد",
    "all": "همه"
  },
  en: {
    "nav.home": "Home", "nav.books": "Library", "nav.movies": "Movies & Series",
    "nav.favorites": "Favorites", "nav.profile": "Profile", "nav.about": "About",
    "side.quote": "“Books are a uniquely portable magic.”",
    "search.placeholder": "Search books, movies & series...",
    "profile.guest": "Guest",
    "hero.eyebrow": "Poyandegan Digital Library",
    "hero.title": "Welcome to the endless world of stories!",
    "hero.sub": "Where books, movies and series live side by side...",
    "hero.cta1": "Get Started", "hero.cta2": "Learn more",
    "home.popularBooks": "Popular Books", "home.popularMovies": "Movies & Series",
    "home.quote": "A reader lives a thousand lives before he dies.",
    "common.viewAll": "View all", "common.empty": "Nothing found.",
    "books.title": "Poyandegan Library", "books.sub": "Your next adventure is only a few pages away.",
    "books.search": "Book title, author or topic...",
    "movies.title": "Movies & Series", "movies.sub": "From heart-pounding mysteries to imaginative worlds.",
    "movies.search": "Title, director or topic...",
    "movies.allTypes": "All", "movies.movies": "Movies", "movies.series": "Series", "movies.animation": "Animation",
    "movies.disclaimer": "Watch links take you to Aparat or trusted search. Availability depends on your region.",
    "sort.popular": "Most popular", "sort.rating": "Highest rated", "sort.az": "Name A–Z", "sort.new": "Newest",
    "fav.title": "My Favorites", "fav.sub": "Books and movies you love live here.",
    "fav.empty": "Nothing yet. Tap the ♥ on any card!",
    "profile.firstName": "First name", "profile.lastName": "Last name", "profile.grade": "Grade",
    "profile.lang": "Site language", "profile.save": "Save changes",
    "profile.privacy": "Data is stored only in this browser.",
    "profile.statBooks": "Books read", "profile.statMovies": "Movies / Series", "profile.statFavs": "Favorites",
    "about.title": "About Poyandegan", "about.sub": "A place for curiosity, imagination and the next story.",
    "about.h2": "What is KetabPoyandegan?",
    "about.p": "A student digital experience for discovering valuable books, films and series. Built as a Grade 9 Technology project.",
    "about.p1t": "Curated books", "about.p1d": "Summaries and useful info",
    "about.p2t": "Watch guide", "about.p2d": "Genre, story and trusted links",
    "about.p3t": "Personal picks", "about.p3d": "Favorites and profile",
    "footer.made": "Made with curiosity ✨",
    "detail.watch": "Watch now", "detail.info": "More info", "detail.addFav": "Add to favorites",
    "detail.removeFav": "Remove from favorites", "detail.pages": "pages", "detail.author": "Author",
    "detail.creator": "Creator", "detail.year": "Year", "detail.genre": "Genre", "detail.runtime": "Runtime",
    "toast.saved": "Profile saved!", "toast.favAdd": "Added to favorites", "toast.favRemove": "Removed from favorites",
    "all": "All"
  }
};

/* ========== STATE ========== */
const state = {
  lang: localStorage.getItem("kp_lang") || "fa",
  profile: JSON.parse(localStorage.getItem("kp_profile") || "null"),
  favs: JSON.parse(localStorage.getItem("kp_favs") || "[]"),
  page: "home"
};

/* ========== HELPERS ========== */
function t(key) {
  return (i18n[state.lang] && i18n[state.lang][key]) || i18n.fa[key] || key;
}

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._tid);
  el._tid = setTimeout(() => el.classList.remove("show"), 2400);
}

function saveFavs() {
  localStorage.setItem("kp_favs", JSON.stringify(state.favs));
  updateStats();
}

function isFav(id) {
  return state.favs.includes(id);
}

function toggleFav(id) {
  if (isFav(id)) {
    state.favs = state.favs.filter(x => x !== id);
    toast(t("toast.favRemove"));
  } else {
    state.favs.push(id);
    toast(t("toast.favAdd"));
  }
  saveFavs();
  renderAll();
}

function watchUrl(item) {
  const q = encodeURIComponent(item.title + (item.type === "series" ? " قسمت ۱" : ""));
  return `https://www.aparat.com/search/${q}`;
}

function infoUrl(item) {
  if (item.author) {
    return `https://www.google.com/search?q=${encodeURIComponent(item.en || item.title + " book")}`;
  }
  return `https://www.google.com/search?q=${encodeURIComponent(item.title + " watch")}`;
}

/* ========== RENDER CARDS ========== */
function bookTitle(b) {
  return state.lang === "en" ? b.en : b.title;
}
function movieTitle(m) {
  return state.lang === "en" ? m.title : m.fa;
}
function bookGenre(b) {
  return state.lang === "en" ? b.genreEn : b.genre;
}
function movieGenre(m) {
  return state.lang === "en" ? m.genre : m.genreFa;
}

function cardHTML(item, kind) {
  const id = item.id;
  const title = kind === "book" ? bookTitle(item) : movieTitle(item);
  const rating = item.rating;
  const fav = isFav(id);
  let typeLabel = "";
  if (kind === "movie") {
    if (item.type === "series") typeLabel = state.lang === "en" ? "Series" : "سریال";
    else if (item.type === "animation") typeLabel = state.lang === "en" ? "Animation" : "انیمیشن";
    else typeLabel = state.lang === "en" ? "Movie" : "فیلم";
  }
  const shortTitle = title.length > 28 ? title.slice(0, 26) + "…" : title;
  return `
    <article class="card" data-id="${id}" data-kind="${kind}">
      <button class="fav-btn ${fav ? "active" : ""}" data-fav="${id}" aria-label="Favorite">♥</button>
      <div class="card-cover">
        <img src="${item.cover}" alt="${title}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <div class="placeholder" style="display:none">
          <span class="ph-icon">${kind === "book" ? "📘" : (item.type === "animation" ? "✨" : "🎬")}</span>
          <span class="ph-title">${shortTitle}</span>
        </div>
        ${typeLabel ? `<span class="type-badge">${typeLabel}</span>` : ""}
      </div>
      <div class="card-body">
        <div class="card-title">${title}</div>
        <div class="card-meta">
          <span class="rating">★ ${rating}</span>
          <span>${item.year}</span>
        </div>
      </div>
    </article>`;
}

/* ========== PAGES ========== */
function renderHome() {
  const topBooks = [...books].sort((a, b) => b.popular - a.popular).slice(0, 6);
  const topMovies = [...movies].sort((a, b) => b.popular - a.popular).slice(0, 8);
  $("#homeBooks").innerHTML = topBooks.map(b => cardHTML(b, "book")).join("");
  $("#homeMovies").innerHTML = topMovies.map(m => cardHTML(m, "movie")).join("");
}

function getBookGenres() {
  const set = new Set(books.map(b => bookGenre(b)));
  return [t("all"), ...[...set].sort()];
}
function getMovieGenres() {
  const set = new Set(movies.map(m => movieGenre(m)));
  return [t("all"), ...[...set].sort()];
}

function renderBookFilters() {
  const genres = getBookGenres();
  const sel = $("#bookGenre");
  const current = sel.value || "all";
  sel.innerHTML = genres.map((g, i) =>
    `<option value="${i === 0 ? "all" : g}" ${ (i === 0 && current === "all") || g === current ? "selected" : "" }>${g}</option>`
  ).join("");
  $("#bookChips").innerHTML = genres.map((g, i) =>
    `<button class="chip ${ (i === 0 && current === "all") || g === current ? "active" : "" }" data-genre="${i === 0 ? "all" : g}">${g}</button>`
  ).join("");
}

function renderMovieFilters() {
  const genres = getMovieGenres();
  const sel = $("#movieGenre");
  const current = sel.value || "all";
  sel.innerHTML = genres.map((g, i) =>
    `<option value="${i === 0 ? "all" : g}" ${ (i === 0 && current === "all") || g === current ? "selected" : "" }>${g}</option>`
  ).join("");
  $("#movieChips").innerHTML = genres.map((g, i) =>
    `<button class="chip ${ (i === 0 && current === "all") || g === current ? "active" : "" }" data-genre="${i === 0 ? "all" : g}">${g}</button>`
  ).join("");
}

function filterBooks() {
  const q = ($("#bookSearch").value || "").trim().toLowerCase();
  const genre = $("#bookGenre").value;
  const sort = $("#bookSort").value;
  let list = books.filter(b => {
    const title = (bookTitle(b) + " " + b.en + " " + b.title + " " + b.author + " " + (b.authorEn || "")).toLowerCase();
    const matchQ = !q || title.includes(q) || bookGenre(b).toLowerCase().includes(q);
    const matchG = genre === "all" || bookGenre(b) === genre;
    return matchQ && matchG;
  });
  if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
  else if (sort === "az") list.sort((a, b) => bookTitle(a).localeCompare(bookTitle(b), state.lang === "fa" ? "fa" : "en"));
  else list.sort((a, b) => b.popular - a.popular);
  $("#booksGrid").innerHTML = list.map(b => cardHTML(b, "book")).join("");
  $("#booksEmpty").classList.toggle("hidden", list.length > 0);
}

function filterMovies() {
  const q = ($("#movieSearch").value || "").trim().toLowerCase();
  const genre = $("#movieGenre").value;
  const type = $("#movieType").value;
  const sort = $("#movieSort").value;
  let list = movies.filter(m => {
    const title = (m.title + " " + m.fa + " " + m.creator + " " + (m.creatorFa || "")).toLowerCase();
    const matchQ = !q || title.includes(q) || movieGenre(m).toLowerCase().includes(q);
    const matchG = genre === "all" || movieGenre(m) === genre;
    const matchT = type === "all" || m.type === type;
    return matchQ && matchG && matchT;
  });
  if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
  else if (sort === "new") list.sort((a, b) => b.year - a.year);
  else list.sort((a, b) => b.popular - a.popular);
  $("#moviesGrid").innerHTML = list.map(m => cardHTML(m, "movie")).join("");
  $("#moviesEmpty").classList.toggle("hidden", list.length > 0);
}

function renderFavorites() {
  const items = state.favs.map(id => {
    const b = books.find(x => x.id === id);
    if (b) return { item: b, kind: "book" };
    const m = movies.find(x => x.id === id);
    if (m) return { item: m, kind: "movie" };
    return null;
  }).filter(Boolean);
  $("#favGrid").innerHTML = items.map(({ item, kind }) => cardHTML(item, kind)).join("");
  $("#favEmpty").style.display = items.length ? "none" : "block";
}

function updateStats() {
  const bookFavs = state.favs.filter(id => id.startsWith("b")).length;
  const movieFavs = state.favs.filter(id => id.startsWith("m")).length;
  $("#statBooks").textContent = bookFavs;
  $("#statMovies").textContent = movieFavs;
  $("#statFavs").textContent = state.favs.length;
}

function updateProfileUI() {
  const p = state.profile;
  const name = p ? `${p.firstName} ${p.lastName}`.trim() : t("profile.guest");
  const letter = p && p.firstName ? p.firstName[0].toUpperCase() : "?";
  $("#chipName").textContent = p ? p.firstName : t("profile.guest");
  $("#avatarLetter").textContent = letter;
  $("#bigAvatar").textContent = letter;
  $("#profileDisplayName").textContent = name;
  if (p) {
    $("#firstName").value = p.firstName || "";
    $("#lastName").value = p.lastName || "";
    $("#grade").value = p.grade || "نهم";
    $("#language").value = state.lang;
    $("#profileMeta").textContent = `${p.grade || ""} · ${state.lang === "en" ? "English" : "فارسی"}`;
  } else {
    $("#profileMeta").textContent = "—";
  }
  updateStats();
}

/* ========== DETAIL MODAL ========== */
function openDetail(id, kind) {
  const item = kind === "book" ? books.find(b => b.id === id) : movies.find(m => m.id === id);
  if (!item) return;
  const isBook = kind === "book";
  const title = isBook ? bookTitle(item) : movieTitle(item);
  const desc = isBook
    ? (state.lang === "en" ? item.descEn : item.desc)
    : (state.lang === "en" ? item.desc : item.descFa);
  const author = isBook
    ? (state.lang === "en" ? item.authorEn : item.author)
    : (state.lang === "en" ? item.creator : item.creatorFa);
  const genre = isBook ? bookGenre(item) : movieGenre(item);
  const runtime = isBook
    ? `${item.pages} ${t("detail.pages")}`
    : (state.lang === "en" ? item.runtime : item.runtimeFa);
  const fav = isFav(id);

  $("#detailContent").innerHTML = `
    <button class="close-x" data-close>×</button>
    <div class="detail-cover">
      <img src="${item.cover}" alt="${title}" onerror="this.parentElement.innerHTML='<div class=placeholder style=display:grid;height:100%;font-size:4rem>${isBook ? "📘" : "🎬"}</div>'" />
    </div>
    <div class="detail-body">
      <h2>${title}</h2>
      <div class="detail-meta">
        <span class="tag">★ ${item.rating}</span>
        <span>${t("detail.year")}: ${item.year}</span>
        <span>${t("detail.genre")}: ${genre}</span>
        <span>${isBook ? t("detail.author") : t("detail.creator")}: ${author}</span>
        <span>${t("detail.runtime")}: ${runtime}</span>
      </div>
      <p class="detail-desc">${desc}</p>
      <div class="detail-actions">
        ${!isBook ? `<a class="btn primary" href="${watchUrl(item)}" target="_blank" rel="noopener">${t("detail.watch")}</a>` : ""}
        <a class="btn ghost" href="${infoUrl(item)}" target="_blank" rel="noopener">${t("detail.info")}</a>
        <button class="btn ${fav ? "danger" : "ghost"}" data-fav="${id}">${fav ? t("detail.removeFav") : t("detail.addFav")}</button>
      </div>
    </div>`;
  $("#detailModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("#detailModal").classList.add("hidden");
  document.body.style.overflow = "";
}

/* ========== LANGUAGE ========== */
function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("kp_lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.body.classList.toggle("en", lang === "en");
  $("#langLabel").textContent = lang === "fa" ? "EN" : "فا";

  // Translate all data-i18n
  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  $$("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = t(key);
  });

  // Select options
  $$("#bookSort option, #movieSort option, #movieType option").forEach(opt => {
    const key = opt.getAttribute("data-i18n");
    if (key) opt.textContent = t(key);
  });

  // Grade options stay Persian labels (school context) but we can leave them
  updateProfileUI();
  renderBookFilters();
  renderMovieFilters();
  renderAll();
}

/* ========== NAVIGATION ========== */
function go(page) {
  state.page = page;
  $$(".page").forEach(p => p.classList.remove("active"));
  const el = $(`#page-${page}`);
  if (el) el.classList.add("active");
  $$(".side-link, .top-link").forEach(b => {
    b.classList.toggle("active", b.dataset.nav === page);
  });
  $("#sidebar").classList.remove("open");
  if (page === "books") { renderBookFilters(); filterBooks(); }
  if (page === "movies") { renderMovieFilters(); filterMovies(); }
  if (page === "favorites") renderFavorites();
  if (page === "profile") updateProfileUI();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderAll() {
  renderHome();
  if (state.page === "books") filterBooks();
  if (state.page === "movies") filterMovies();
  if (state.page === "favorites") renderFavorites();
}

/* ========== EVENTS ========== */
function bindEvents() {
  // Nav
  document.addEventListener("click", e => {
    const nav = e.target.closest("[data-nav]");
    if (nav) {
      e.preventDefault();
      go(nav.dataset.nav);
    }
    const favBtn = e.target.closest("[data-fav]");
    if (favBtn) {
      e.stopPropagation();
      toggleFav(favBtn.dataset.fav);
      return;
    }
    const card = e.target.closest(".card[data-id]");
    if (card && !e.target.closest("[data-fav]")) {
      openDetail(card.dataset.id, card.dataset.kind);
    }
    if (e.target.closest("[data-close]") || e.target.classList.contains("modal-backdrop")) {
      closeModal();
    }
  });

  $("#menuBtn").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  $("#langToggle").addEventListener("click", () => setLanguage(state.lang === "fa" ? "en" : "fa"));
  $("#profileChip").addEventListener("click", () => go("profile"));
  $("#favBtn").addEventListener("click", () => go("favorites"));

  // Search
  $("#globalSearch").addEventListener("input", e => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) return;
    // simple: go to books or movies with query
  });
  $("#globalSearch").addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const q = e.target.value.trim();
      if (!q) return;
      go("books");
      $("#bookSearch").value = q;
      filterBooks();
    }
  });

  $("#bookSearch").addEventListener("input", filterBooks);
  $("#bookGenre").addEventListener("change", () => {
    $$("#bookChips .chip").forEach(c => c.classList.toggle("active", c.dataset.genre === $("#bookGenre").value));
    filterBooks();
  });
  $("#bookSort").addEventListener("change", filterBooks);
  $("#bookChips").addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    $("#bookGenre").value = chip.dataset.genre;
    $$("#bookChips .chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    filterBooks();
  });

  $("#movieSearch").addEventListener("input", filterMovies);
  $("#movieGenre").addEventListener("change", () => {
    $$("#movieChips .chip").forEach(c => c.classList.toggle("active", c.dataset.genre === $("#movieGenre").value));
    filterMovies();
  });
  $("#movieType").addEventListener("change", filterMovies);
  $("#movieSort").addEventListener("change", filterMovies);
  $("#movieChips").addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    $("#movieGenre").value = chip.dataset.genre;
    $$("#movieChips .chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    filterMovies();
  });

  // Profile form
  $("#profileForm").addEventListener("submit", e => {
    e.preventDefault();
    const firstName = $("#firstName").value.trim();
    const lastName = $("#lastName").value.trim();
    const grade = $("#grade").value;
    const lang = $("#language").value;
    state.profile = { firstName, lastName, grade };
    localStorage.setItem("kp_profile", JSON.stringify(state.profile));
    if (lang !== state.lang) setLanguage(lang);
    else updateProfileUI();
    toast(t("toast.saved"));
  });

  // Esc to close modal
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
}

/* ========== INIT ========== */
function init() {
  bindEvents();
  setLanguage(state.lang);
  updateProfileUI();
  go("home");
}

init();
