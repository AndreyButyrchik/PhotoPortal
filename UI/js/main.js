let user = 'Галя Печка';

let filterConfig = {createdAt: {}, author: '', hashtags: []};

let photoPostsArray = [
    {
        id: '1',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-02-21T23:00:00'),
        author: 'Вася Сиплый',
        photoLink: 'http://www.kino-teatr.ru/acter/album/3215/450605.jpg',
        hashtags: ['#cool', '#smile', '#positive', '#intergalactic'],
        likes: ['Дима Зевс', 'Зоя Кожаный-Затылок', 'Луи Кирпич', 'Шурик Веселый'],
        removed: false
    },
    {
        id: '2',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-03-01T23:00:00'),
        author: 'Дима Зевс',
        photoLink: 'https://pp.userapi.com/c305713/u11158447/154446725/x_60f14c4f.jpg',
        hashtags: ['#cool', '#smile', '#positive', '#intergalactic'],
        likes: ['Рома Торпеда', 'Галя Печка', 'Гена Орешек'],
        removed: false
    },
    {
        id: '3',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-01-12T23:00:00'),
        author: 'Вано Питон',
        photoLink: 'https://forum.anabolicshops.com/attachments/60185/',
        hashtags: ['#cool', '#smile', '#positive'],
        likes: ['Рома Торпеда', 'Галя Печка', 'Гена Орешек'],
        removed: false
    },
    {
        id: '4',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-01-09T23:00:00'),
        author: 'Ромчик Гвоздь',
        photoLink: 'https://i08.fotocdn.net/s11/154/public_pin_m/474/2311969177.jpg',
        hashtags: ['#cool', '#positive', '#intergalactic'],
        likes: ['Дима Зевс', 'Зоя Кожаный-Затылок', 'Луи Кирпич', 'Шурик Веселый'],
        removed: false
    },
    {
        id: '5',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-03-03T23:00:00'),
        author: 'Катя Пляжная',
        photoLink: 'http://1.bp.blogspot.com/--BZ64SXerLA/U7Q4sosowBI/AAAAAAAADqs/K7poh-Rblq0/s1600/103350358_3256587_tynika0.jpg',
        hashtags: ['#cool', '#smile', '#positive'],
        likes: ['Рома Торпеда', 'Галя Печка', 'Гена Орешек'],
        removed: false
    },
    {
        id: '6',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-02-20T23:00:00'),
        author: 'Фил Ночной',
        photoLink: 'http://www.gipsyteam.ru/upload/Contentimage/default/1/4/9/14993.jpg',
        hashtags: ['#cool', '#smile', '#positive'],
        likes: ['Рома Торпеда', 'Галя Печка', 'Гена Орешек'],
        removed: false
    },
    {
        id: '7',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-02-18T23:00:00'),
        author: 'Зоя Кожаный-Затылок',
        photoLink: 'http://www.medpillmart.com/blog/wp-content/uploads/2016/03/healthy-life-with-exercise.jpg',
        hashtags: ['#cool', '#smile', '#positive', '#intergalactic'],
        likes: ['Дима Зевс', 'Зоя Кожаный-Затылок', 'Луи Кирпич', 'Шурик Веселый'],
        removed: false
    },
    {
        id: '8',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Димон Кудрявый',
        photoLink: 'https://pp.userapi.com/c840226/v840226013/27508/MJjzdUOsaNQ.jpg',
        hashtags: ['#cool', '#smile', '#positive'],
        likes: ['Рома Торпеда', 'Галя Печка', 'Гена Орешек'],
        removed: false
    },
    {
        id: '9',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-03-02T23:00:00'),
        author: 'Луи Кирпич',
        photoLink: 'https://s79369.cdn.ngenix.net/media/photo/original/20170515/5bf6a2b3b7b906ebd3e023192883b0f3.jpg',
        hashtags: ['#cool', '#positive'],
        likes: ['Рома Торпеда', 'Галя Печка', 'Гена Орешек'],
        removed: false
    },
    {
        id: '10',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-02-01T23:00:00'),
        author: 'Павлик Подгубный',
        photoLink: 'https://pp.userapi.com/c638326/v638326670/40cb7/Io79qfHCZnU.jpg',
        hashtags: ['#cool', '#smile', '#positive', '#intergalactic'],
        likes: ['Дима Зевс', 'Зоя Кожаный-Затылок', 'Луи Кирпич', 'Шурик Веселый'],
        removed: false
    },
    {
        id: '11',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-02-02T23:00:00'),
        author: 'Танюха Мазь',
        photoLink: 'https://scontent-arn2-1.cdninstagram.com/t51.2885-15/e15/1170465_571301496276287_1328633538_n.jpg?ig_cache_key=NTg0NjA5MTk5MDA1NTgzNjUx.2',
        hashtags: ['#cool', '#smile', '#positive'],
        likes: ['Рома Торпеда', 'Галя Печка', 'Гена Орешек'],
        removed: false
    },
    {
        id: '12',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-01-13T23:00:00'),
        author: 'Ислам Чех',
        photoLink: 'http://today.kz/static/uploads/5311aa79-96b1-4c5a-960f-37a1935c398c.jpeg',
        hashtags: ['#cool', '#smile', '#positive', '#intergalactic'],
        likes: ['Дима Зевс', 'Зоя Кожаный-Затылок', 'Луи Кирпич', 'Шурик Веселый'],
        removed: false
    },
    {
        id: '13',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-01-11T23:00:00'),
        author: 'Ульянка Куст',
        photoLink: 'https://img-fotki.yandex.ru/get/202385/414521066.5/0_180fed_dc694d7f_orig.jpg',
        hashtags: ['#cool', '#smile', '#positive'],
        likes: ['Рома Торпеда', 'Галя Печка', 'Гена Орешек'],
        removed: false
    },
    {
        id: '14',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-02-12T23:00:00'),
        author: 'Леха Краснопёрый',
        photoLink: 'http://lesohot.ru/upload/blogs/f92f2b517a886d5de80a4451ef38b218.jpg',
        hashtags: ['#cool', '#positive'],
        likes: ['Дима Зевс', 'Зоя Кожаный-Затылок', 'Луи Кирпич', 'Шурик Веселый'],
        removed: false
    },
    {
        id: '15',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-01-22T23:00:00'),
        author: 'Шурик Веселый',
        photoLink: 'https://союзженскихсил.рф/upload/resize_cache/main/b6d/800_800_1/b6d97c5b46ccc547e50b7210dc37c645.jpg',
        hashtags: ['#cool', '#smile', '#positive'],
        likes: ['Рома Торпеда', 'Галя Печка', 'Гена Орешек'],
        removed: false
    },
    {
        id: '16',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-01-29T23:00:00'),
        author: 'Даня Фазан',
        photoLink: 'http://cs7004.vk.me/v7004018/1da5a/lwbInpNmCAM.jpg',
        hashtags: ['#cool', '#smile', '#positive', '#intergalactic', '#yeah'],
        likes: ['Рома Торпеда', 'Галя Печка', 'Гена Орешек'],
        removed: false
    },
    {
        id: '17',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-01-11T23:00:00'),
        author: 'Гена Орешек',
        photoLink: 'https://news.pn/photo/3786ecbdc5eaa3fc92e9569a4bc5a8ec.i1200x900x687.jpeg',
        hashtags: ['#cool', '#smile', '#positive'],
        likes: ['Рома Торпеда', 'Галя Печка', 'Гена Орешек'],
        removed: false
    },
    {
        id: '18',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-03-01T23:00:00'),
        author: 'Галя Печка',
        photoLink: 'https://s10.stc.all.kpcdn.net/share/i/4/1174690/wx1080.jpg',
        hashtags: ['#cool', '#smile', '#positive'],
        likes: ['Дима Зевс', 'Зоя Кожаный-Затылок', 'Луи Кирпич', 'Шурик Веселый'],
        removed: false
    },
    {
        id: '19',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-01-18T23:00:00'),
        author: 'Саша Соска',
        photoLink: 'http://blog.nedbright.com/wp-content/uploads/2015/10/1380443087_953250986.jpg',
        hashtags: ['#cool', '#positive', '#smile'],
        likes: ['Рома Торпеда', 'Галя Печка', 'Гена Орешек'],
        removed: false
    },
    {
        id: '20',
        descriprion: 'Smile, it is the key that fits the lock of everybody\'s heart.',
        createdAt: new Date('2018-02-27T23:00:00'),
        author: 'Рома Торпеда',
        photoLink: 'https://i.ytimg.com/vi/7ApWJhEQaco/maxresdefault.jpg',
        hashtags: ['#cool', '#smile', '#positive', '#intergalactic'],
        likes: ['Дима Зевс', 'Зоя Кожаный-Затылок', 'Луи Кирпич', 'Шурик Веселый'],
        removed: false
    }
];

function showPhotoPosts(skip, top, filterConfig, insertBefore) {
    let postsArray = dataFunc.getPhotoPosts(skip, top, filterConfig);
    if (typeof postsArray === 'object') {
        domFunc.showPhotoPosts(postsArray, insertBefore);
        return true;
    }
    return false;
}

function addPhotoPost(PhotoPost, insertBefore) {
    if (dataFunc.addPhotoPost(PhotoPost)) {
        domFunc.addPhotoPost(PhotoPost, insertBefore);
        return true;
    }
    return false;
}

function removePhotoPost(event) {
    let modalWindow = document.getElementById('modalWindowConfirmDelete');
    modalWindow.style.display = 'none';
    let id = event.target.value;
    if (dataFunc.removePhotoPost(id)) {
        domFunc.removePhotoPost(id);
    }
    return false;
}

function showElementsForUser() {
    if (user !== null) {
        domFunc.showElementsForAuthUser();
    }
    else {
        domFunc.showButtonSingIn();
    }
    domFunc.showFilterUsers();
    domFunc.showFilterHashtags();
}

function likePost(event) {
    if (user !== null && event.target.classList.contains('fa-heart')) {
        if (dataFunc.likePhotoPost(this.id)) {
            domFunc.likePost(this.id);
        }
        else {
            domFunc.unLikePost(this.id);
        }
    }
}

showPhotoPosts(0, 8, filterConfig, true);

showElementsForUser();