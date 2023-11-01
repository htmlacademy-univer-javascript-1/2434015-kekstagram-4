const Const = {
  posts_count: 25,
  names: ['Генадий', 'Роман', 'Анна', 'Мария', 'Виктор', 'Анжелика', 'Елизавета', 'Олег', 'Николай', 'Павел'],
  comments: [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ],
  count_comments: {
    min: 0,
    max: 10,
  },
  count_likes: {
    min: 15,
    max: 200,
  },
  count_avatar: 6,
  comment_max_length: 140,
};

const IDS_array = [];

const createComment = () => {
  const comments = [];
  let commentId;
  for (let i = 0; i < get_random_value
  (Const.count_comments.min, Const.count_comments.max); i++) {
    commentId = get_unick_value
  (IDS_array
    , 1, 999);
    IDS_array
  .push(commentId);

    let messages = new Array(2)
      .fill(null)
      .map(() => get_random_element(Const.comments))
      .reduce((result, item) => {
        return result.includes(item) ? result : [...result, item];
      }, [])
      .join(' ');

    comments.push({
      id: commentId,
      avatar: `img/avatar-${get_random_value
      (1, Const.count_avatar)}.svg`,
      message: messages.substr(0, Const.comment_max_length),
      name: get_random_element(Const.names),
    });
  }
  return comments;
};

const posts = new Array(Const.posts_count)
  .fill(null)
  .map((item, index) => {
    return {
      id: index + 1,
      url: `photos/${index + 1}.jpg`,
      description: `Описание #${index + 1}`,
      likes: get_random_value
    (15, 200),
      comments: createComment(),
    };
  });

export { Const, posts };
