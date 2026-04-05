const quotePairs = [
  {
    theme: "Impermanence",
    quotes: [
      {
        text: "You have power over your mind, not outside events. Realize this and you will find strength.",
        author: "Marcus Aurelius",
        tradition: "Stoicism",
        year: "~170 AD"
      },
      {
        text: "Nothing is permanent. Don't stress yourself too much because no matter how bad the situation is, it will change.",
        author: "Gautama Buddha",
        tradition: "Buddhism",
        year: "~500 BC"
      }
    ],
    reflection: "Where in your life are you trying to control something outside yourself?"
  },
  {
    theme: "Faith",
    quotes: [
      {
        text: "You know, I am enjoying two pensions. One is by the recommendation of your father, for whom I once worked in the railway office. The other is by the recommendation of my Heavenly Father, for whom I have conscientiously finished my earthly duties in life. A pension of fathomless peace — a reward for many years of deep meditation.",
        author: "Swami Pranabananda",
        tradition: "Hindu Yoga",
        year: "~1905"
      },
      {
        text: "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
        author: "Thich Nhat Hanh",
        tradition: "Vietnamese Buddhism",
        year: "~2009"
      }
    ],
    reflection: "Do the ebbs and flows of your faith change your actions?"
  },
  {
    theme: "Surrender",
    quotes: [
      {
        text: "Let go, or be dragged.",
        author: "Zen Proverb",
        tradition: "Zen Buddhism",
        year: "Traditional"
      },
      {
        text: "Stop acting so small. You are the universe in ecstatic motion.",
        author: "Rumi",
        tradition: "Sufism",
        year: "~1250 AD"
      }
    ],
    reflection: "What are you holding onto that is holding you back?"
  },
  {
    theme: "The Present Moment",
    quotes: [
      {
        text: "Realize deeply that the present moment is all you ever have.",
        author: "Eckhart Tolle",
        tradition: "Contemporary Spirituality",
        year: "2004"
      },
      {
        text: "Forever is composed of nows.",
        author: "Emily Dickinson",
        tradition: "American Poetry",
        year: "~1863"
      }
    ],
    reflection: "What would change if you treated this moment as complete in itself?"
  },
  {
    theme: "The Ego",
    quotes: [
      {
        text: "The ego is not who you really are. The ego is your self-image; it is your social mask.",
        author: "Deepak Chopra",
        tradition: "Contemporary Spirituality",
        year: "~2000"
      },
      {
        text: "He who knows others is wise. He who knows himself is enlightened.",
        author: "Laozi",
        tradition: "Taoism",
        year: "~500 BC"
      }
    ],
    reflection: "How much of what you did today was driven by who you are versus who you want others to think you are?"
  },
  {
    theme: "Silence",
    quotes: [
      {
        text: "In the attitude of silence the soul finds the path in a clearer light.",
        author: "Mahatma Gandhi",
        tradition: "Hindu Philosophy",
        year: "~1930"
      },
      {
        text: "Silence is the language of God; all else is poor translation.",
        author: "Rumi",
        tradition: "Sufism",
        year: "~1250 AD"
      }
    ],
    reflection: "When did you last sit in true silence? What did it reveal?"
  },
  {
    theme: "Suffering",
    quotes: [
      {
        text: "Pain is inevitable. Suffering is optional.",
        author: "Haruki Murakami",
        tradition: "Contemporary Literature",
        year: "2009"
      },
      {
        text: "The obstacle is the way.",
        author: "Marcus Aurelius",
        tradition: "Stoicism",
        year: "~170 AD"
      }
    ],
    reflection: "Where in your life are you adding a story to pain that isn't necessary?"
  },
  {
    theme: "Interconnection",
    quotes: [
      {
        text: "We are here to awaken from our illusion of separateness.",
        author: "Thich Nhat Hanh",
        tradition: "Vietnamese Buddhism",
        year: "~1990"
      },
      {
        text: "No man is an island, entire of itself; every man is a piece of the continent, a part of the main.",
        author: "John Donne",
        tradition: "Christian Mysticism",
        year: "1624"
      }
    ],
    reflection: "How does remembering your connection to others change how you want to move through the world today?"
  },
  {
    theme: "Simplicity",
    quotes: [
      {
        text: "Nature does not hurry, yet everything is accomplished.",
        author: "Laozi",
        tradition: "Taoism",
        year: "~500 BC"
      },
      {
        text: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
        tradition: "Renaissance Philosophy",
        year: "~1490"
      }
    ],
    reflection: "What could you subtract from your life today to make space for what matters?"
  },
  {
    theme: "Death",
    quotes: [
      {
        text: "It is not death that a man should fear, but he should fear never beginning to live.",
        author: "Marcus Aurelius",
        tradition: "Stoicism",
        year: "~170 AD"
      },
      {
        text: "Die before you die and discover that there is no death.",
        author: "Rumi",
        tradition: "Sufism",
        year: "~1250 AD"
      }
    ],
    reflection: "If today were your last, what would feel unfinished — and why haven't you started it?"
  },
  {
    theme: "Acceptance",
    quotes: [
      {
        text: "Whatever the present moment contains, accept it as if you had chosen it.",
        author: "Eckhart Tolle",
        tradition: "Contemporary Spirituality",
        year: "2004"
      },
      {
        text: "Do not seek for things to happen the way you want them to; rather, wish that what happens happens the way it is, and you will be happy.",
        author: "Epictetus",
        tradition: "Stoicism",
        year: "~100 AD"
      }
    ],
    reflection: "What situation in your life would shift if you moved from resistance to acceptance?"
  },
  {
    theme: "Gratitude",
    quotes: [
      {
        text: "When you arise in the morning, think of what a precious privilege it is to be alive — to breathe, to think, to enjoy, to love.",
        author: "Marcus Aurelius",
        tradition: "Stoicism",
        year: "~170 AD"
      },
      {
        text: "If the only prayer you ever say in your entire life is thank you, it will be enough.",
        author: "Meister Eckhart",
        tradition: "Christian Mysticism",
        year: "~1300 AD"
      }
    ],
    reflection: "What is one thing you walked past today without noticing its gift?"
  },
  {
    theme: "The Witness",
    quotes: [
      {
        text: "You are not the thoughts you think. You are the one who notices them.",
        author: "Michael A. Singer",
        tradition: "Contemporary Spirituality",
        year: "2007"
      },
      {
        text: "Between stimulus and response there is a space. In that space is our power to choose our response.",
        author: "Viktor Frankl",
        tradition: "Existential Psychology",
        year: "1946"
      }
    ],
    reflection: "Can you catch yourself in a moment today before reacting — and simply notice?"
  },
  {
    theme: "Love",
    quotes: [
      {
        text: "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
        author: "Rumi",
        tradition: "Sufism",
        year: "~1250 AD"
      },
      {
        text: "Love is not something you find. Love is something that finds you.",
        author: "Loretta Young",
        tradition: "Contemporary Wisdom",
        year: "~1970"
      }
    ],
    reflection: "What barrier have you built against love — for yourself or another — that you could gently lower today?"
  },
  {
    theme: "Flow",
    quotes: [
      {
        text: "The Tao that can be told is not the eternal Tao.",
        author: "Laozi",
        tradition: "Taoism",
        year: "~500 BC"
      },
      {
        text: "You can't stop the waves, but you can learn to surf.",
        author: "Jon Kabat-Zinn",
        tradition: "Mindfulness",
        year: "~1990"
      }
    ],
    reflection: "Where in your life are you fighting the current rather than learning to move with it?"
  },
  {
    theme: "The Self",
    quotes: [
      {
        text: "Man is made by his belief. As he believes, so he is.",
        author: "Bhagavad Gita",
        tradition: "Hinduism",
        year: "~200 BC"
      },
      {
        text: "To know yourself as the being underneath the thinker, underneath the doer, underneath the feeler, is freedom.",
        author: "Eckhart Tolle",
        tradition: "Contemporary Spirituality",
        year: "1997"
      }
    ],
    reflection: "What belief about yourself is so old you've stopped questioning whether it's true?"
  },
  {
    theme: "Compassion",
    quotes: [
      {
        text: "If you want others to be happy, practice compassion. If you want to be happy, practice compassion.",
        author: "The Dalai Lama",
        tradition: "Tibetan Buddhism",
        year: "~1990"
      },
      {
        text: "Be kind, for everyone you meet is fighting a harder battle.",
        author: "Philo of Alexandria",
        tradition: "Hellenistic Philosophy",
        year: "~50 AD"
      }
    ],
    reflection: "Who in your life could use compassion that you have been withholding — even yourself?"
  },
  {
    theme: "Action Without Attachment",
    quotes: [
      {
        text: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
        author: "Bhagavad Gita",
        tradition: "Hinduism",
        year: "~200 BC"
      },
      {
        text: "Do the work. Don't seek the result.",
        author: "Alan Watts",
        tradition: "Contemporary Philosophy",
        year: "~1960"
      }
    ],
    reflection: "What would you do differently today if the outcome were completely out of your hands?"
  },
  {
    theme: "Truth",
    quotes: [
      {
        text: "Three things cannot be long hidden: the sun, the moon, and the truth.",
        author: "Gautama Buddha",
        tradition: "Buddhism",
        year: "~500 BC"
      },
      {
        text: "The truth will set you free, but first it will make you miserable.",
        author: "James A. Garfield",
        tradition: "American Wisdom",
        year: "~1876"
      }
    ],
    reflection: "What truth are you currently making yourself comfortable with avoiding?"
  },
  {
    theme: "The Body",
    quotes: [
      {
        text: "Take care of your body. It's the only place you have to live.",
        author: "Jim Rohn",
        tradition: "Contemporary Philosophy",
        year: "~1985"
      },
      {
        text: "The body is your temple. Keep it pure and clean for the soul to reside in.",
        author: "B.K.S. Iyengar",
        tradition: "Yogic Tradition",
        year: "~1970"
      }
    ],
    reflection: "What is your body trying to tell you today that your mind keeps talking over?"
  },
  {
    theme: "Humility",
    quotes: [
      {
        text: "The wise man knows what he does not know.",
        author: "Laozi",
        tradition: "Taoism",
        year: "~500 BC"
      },
      {
        text: "I know that I know nothing.",
        author: "Socrates",
        tradition: "Greek Philosophy",
        year: "~400 BC"
      }
    ],
    reflection: "In what area of your life has certainty been closing you off to learning?"
  },
  {
    theme: "Anger",
    quotes: [
      {
        text: "Holding onto anger is like drinking poison and expecting the other person to die.",
        author: "Attributed to the Buddha",
        tradition: "Buddhism",
        year: "Traditional"
      },
      {
        text: "For every minute you remain angry, you give up sixty seconds of peace of mind.",
        author: "Ralph Waldo Emerson",
        tradition: "American Transcendentalism",
        year: "~1840"
      }
    ],
    reflection: "What anger are you carrying that was never really about the other person?"
  },
  {
    theme: "Purpose",
    quotes: [
      {
        text: "He who has a why to live can bear almost any how.",
        author: "Friedrich Nietzsche",
        tradition: "Western Philosophy",
        year: "~1888"
      },
      {
        text: "Your work is to discover your world and then with all your heart give yourself to it.",
        author: "Gautama Buddha",
        tradition: "Buddhism",
        year: "~500 BC"
      }
    ],
    reflection: "What is one thing you could do today that would feel like it actually matters?"
  },
  {
    theme: "Breath",
    quotes: [
      {
        text: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
        author: "Thich Nhat Hanh",
        tradition: "Vietnamese Buddhism",
        year: "~1990"
      },
      {
        text: "Breath is the bridge which connects life to consciousness, which unites your body to your thoughts.",
        author: "Thich Nhat Hanh",
        tradition: "Vietnamese Buddhism",
        year: "~1990"
      }
    ],
    reflection: "Before reading the next thing on your phone, take five slow breaths. What do you notice?"
  },
  {
    theme: "Resistance",
    quotes: [
      {
        text: "What you resist, persists.",
        author: "Carl Jung",
        tradition: "Analytical Psychology",
        year: "~1930"
      },
      {
        text: "The more you try to avoid suffering, the more you suffer.",
        author: "Thomas Merton",
        tradition: "Christian Mysticism",
        year: "~1960"
      }
    ],
    reflection: "What experience are you refusing to fully feel — and what might happen if you let yourself feel it?"
  },
  {
    theme: "Courage",
    quotes: [
      {
        text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.",
        author: "Eleanor Roosevelt",
        tradition: "American Wisdom",
        year: "~1950"
      },
      {
        text: "Confront the dark parts of yourself, and work to banish them with illumination and forgiveness.",
        author: "August Wilson",
        tradition: "Contemporary Literature",
        year: "~1990"
      }
    ],
    reflection: "What is the one thing you keep almost doing — and what is the real cost of continuing to wait?"
  },
  {
    theme: "Desire",
    quotes: [
      {
        text: "Desire is the root of suffering.",
        author: "Gautama Buddha",
        tradition: "Buddhism",
        year: "~500 BC"
      },
      {
        text: "There are two tragedies in life. One is to lose your heart's desire. The other is to gain it.",
        author: "George Bernard Shaw",
        tradition: "Irish Literature",
        year: "1903"
      }
    ],
    reflection: "What are you chasing right now — and what do you believe it will finally give you when you get it?"
  },
  {
    theme: "Forgiveness",
    quotes: [
      {
        text: "Forgiveness is not an occasional act; it is a constant attitude.",
        author: "Martin Luther King Jr.",
        tradition: "Christian Philosophy",
        year: "~1960"
      },
      {
        text: "To forgive is to set a prisoner free and discover that the prisoner was you.",
        author: "Lewis B. Smedes",
        tradition: "Christian Theology",
        year: "1984"
      }
    ],
    reflection: "Who have you not forgiven — and how much of your energy are you spending keeping that alive?"
  },
  {
    theme: "Solitude",
    quotes: [
      {
        text: "Whosoever is delighted in solitude is either a wild beast or a god.",
        author: "Francis Bacon",
        tradition: "Western Philosophy",
        year: "~1620"
      },
      {
        text: "In solitude the mind gains strength and learns to lean upon itself.",
        author: "Laurence Sterne",
        tradition: "English Literature",
        year: "~1760"
      }
    ],
    reflection: "What does solitude reveal about you that company helps you avoid?"
  },
  {
    theme: "Wonder",
    quotes: [
      {
        text: "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.",
        author: "Albert Einstein",
        tradition: "Scientific Philosophy",
        year: "1931"
      },
      {
        text: "He who can no longer pause to wonder and stand rapt in awe is as good as dead.",
        author: "Albert Einstein",
        tradition: "Scientific Philosophy",
        year: "~1930"
      }
    ],
    reflection: "When did you last feel genuine wonder — and what would you need to slow down enough to feel it again?"
  }
];