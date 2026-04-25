
export interface Translations {
  nav: {
    home: string;
    teachers: string;
    curriculum: string;
    pricing: string;
    login: string;
    startNow: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    students: string;
    teachers: string;
    rating: string;
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
  };
  courses: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    levels: {
      beginner: string;
      intermediate: string;
      advanced: string;
    };
    c1Title: string;
    c1Desc: string;
    c2Title: string;
    c2Desc: string;
    c3Title: string;
    c3Desc: string;
    details: string;
  };
  profile: {
    title: string;
    role: string;
    addChild: string;
    myChildren: string;
    noChildren: string;
    dependentRegistration: string;
    childPassword: string;
    childProfile: string;
    history: string;
    grades: string;
    backToProfile: string;
    date: string;
    subject: string;
    grade: string;
    notes: string;
    day: string;
    teacher: string;
    schedule: string;
  };
  schedule: {
    title: string;
    subtitle?: string;
    upcomingClasses: string;
    bookClass: string;
    today: string;
    teacher: string;
    time: string;
    duration: string;
    status: string;
    join: string;
    noClasses: string;
    subject: string;
    group: string;
    level: string;
    selectSubject: string;
    selectGroup: string;
    selectLevel: string;
    selectTeacher: string;
    male: string;
    female: string;
    minutes: string;
    exitMeeting: string;
  };
  messages: {
    title: string;
    noMessages: string;
    typeMessage: string;
    send: string;
    online: string;
    offline: string;
  };
  registration: {
    maleTeacher: string;
    femaleTeacher: string;
    maleSupervisor: string;
    femaleSupervisor: string;
  };
  steps: {
    overline: string;
    title: string;
    s1Title: string;
    s1Desc: string;
    s2Title: string;
    s2Desc: string;
    s3Title: string;
    s3Desc: string;
  };
  auth: {
    loginTitle: string;
    signupTitle: string;
    forgotPasswordTitle: string;
    email: string;
    password: string;
    fullName: string;
    forgotPassword: string;
    noAccount: string;
    haveAccount: string;
    ctaLogin: string;
    ctaSignup: string;
    ctaReset: string;
    socialLogin: string;
    resetSuccess: string;
    backToLogin: string;
  };
  ayah: {
    title: string;
    text: string;
    surah: string;
    translation: string;
  };
}

export const translations: Record<'ar' | 'en', Translations> = {
  ar: {
    nav: {
      home: "الرئيسية",
      teachers: "المعلمون",
      curriculum: "المناهج",
      pricing: "الأسعار",
      login: "تسجيل الدخول",
      startNow: "ابدأ الآن",
    },
    hero: {
      badge: "منصة تعليمية معتمدة",
      title: "رحلتك في حفظ",
      titleAccent: "القرآن الكريم",
      subtitle: "تعلم التجويد والحفظ مع نخبة من القراء المجازين من الحرمين الشريفين، بأساليب تعليمية حديثة تناسب جميع الأعمار.",
      ctaPrimary: "ابدأ جلستك الأولى مجاناً",
      ctaSecondary: "تصفح قائمة القراء",
      students: "طالب مسجل",
      teachers: "معلم مجاز",
      rating: "تقييم المستخدمين",
    },
    features: {
      badge: "لماذا نحن؟",
      title: "لماذا تختار منصتنا؟",
      subtitle: "نجمع بين الأصالة في التعليم والتقنيات الحديثة لضمان رحلة تعليمية ممتعة وفعالة.",
      f1Title: "معلمون مجازون",
      f1Desc: "نخبة من القراء من العالم الإسلامي الحاصلين على أعلى درجات الإسناد.",
      f2Title: "بيئة تعليمية تفاعلية",
      f2Desc: "أحدث التقنيات لسهولة التواصل بين المعلم والطالب وضمان جودة التلقي.",
      f3Title: "باقات للعائلات",
      f3Desc: "خصومات خاصة للعائلات والمجموعات لتشجيع الجميع على الحفظ.",
      f4Title: "متابعة مستمرة",
      f4Desc: "تقارير دورية لمتابعة مستوى الطالب وتقدمه في الحفظ والتجويد.",
    },
    courses: {
      badge: "خدماتنا",
      title: "مناهج تعليمية متكاملة",
      subtitle: "خطط دراسية صممت بعناية لتناسب مختلف المستويات والأعمار.",
      cta: "استعرض جميع البرامج",
      levels: {
        beginner: "مبتدئ",
        intermediate: "متوسط",
        advanced: "متقدم",
      },
      c1Title: "القاعدة النورانية",
      c1Desc: "الخطوة الأولى لتعلم النطق الصحيح وتأسيس القراءة باللغة العربية.",
      c2Title: "إتقان التجويد",
      c2Desc: "تعلم أحكام التجويد الأساسية والتدرب على تطبيقها في القراءة.",
      c3Title: "برنامج الحفظ",
      c3Desc: "خطة مخصصة لحفظ القرآن الكريم مع مراجعة مستمرة وتثبيت.",
      details: "التفاصيل والاشتراك",
    },
    profile: {
      title: "الملف الشخصي",
      role: "الدور",
      addChild: "إضافة طفل",
      myChildren: "أطفالي المسجلين",
      noChildren: "لا يوجد أطفال مسجلين حالياً",
      dependentRegistration: "تسجيل تابع جديد",
      childPassword: "كلمة مرور الطفل",
      childProfile: "ملف التابع",
      history: "السجل الدراسي",
      grades: "الدرجات",
      backToProfile: "العودة للملف الشخصي",
      date: "التاريخ",
      subject: "المادة",
      grade: "الدرجة",
      notes: "ملاحظات",
      day: "اليوم",
      teacher: "المعلم",
      schedule: "الجدول الأسبوعي",
    },
    schedule: {
      title: "جدول المواعيد",
      subtitle: "إدارة حصصك التعليمية ومتابعة المواعيد القادمة.",
      upcomingClasses: "الحلقات القادمة",
      bookClass: "حجز حلقة جديدة",
      today: "اليوم",
      teacher: "المعلم",
      time: "الوقت",
      duration: "المدة",
      status: "الحالة",
      join: "انضمام",
      noClasses: "لا توجد حلقات مجدولة حالياً",
      subject: "المادة",
      group: "المجموعة",
      level: "المستوى",
      selectSubject: "اختر المادة",
      selectGroup: "اختر المجموعة",
      selectLevel: "اختر المستوى",
      selectTeacher: "اختر المعلم",
      male: "رجال / بنين",
      female: "نساء / بنات",
      minutes: "دقيقة",
      exitMeeting: "مغادرة الحلقة",
    },
    messages: {
      title: "الرسائل",
      noMessages: "لا توجد رسائل حالياً",
      typeMessage: "اكتب رسالتك هنا...",
      send: "إرسال",
      online: "نشط الآن",
      offline: "غير متصل",
    },
    registration: {
      maleTeacher: "تسجيل المعلمين",
      femaleTeacher: "تسجيل المعلمات",
      maleSupervisor: "تسجيل المشرفين",
      femaleSupervisor: "تسجيل المشرفات",
    },
    steps: {
      overline: "رحلتك نحو التنوير",
      title: "ثلاث خطوات بسيطة لبدء نموك الروحي",
      s1Title: "إنشاء ملف شخصي",
      s1Desc: "شاركنا أهدافك التعليمية ومستواك الحالي.",
      s2Title: "احجز جلسة تجريبية",
      s2Desc: "قابل معلمك واختبر جلسة فردية مباشرة.",
      s3Title: "ابدأ التعلم",
      s3Desc: "ابدأ مسارك المنظم نحو إتقان القرآن الكريم.",
    },
    auth: {
      loginTitle: "تسجيل الدخول",
      signupTitle: "إنشاء حساب جديد",
      forgotPasswordTitle: "استعادة كلمة المرور",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      fullName: "الاسم الكامل",
      forgotPassword: "نسيت كلمة المرور؟",
      noAccount: "ليس لديك حساب؟",
      haveAccount: "لديك حساب بالفعل؟",
      ctaLogin: "دخول",
      ctaSignup: "اشترك الآن",
      ctaReset: "إرسال رابط الاستعادة",
      socialLogin: "أو الدخول عبر",
      resetSuccess: "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني بنجاح.",
      backToLogin: "العودة لتسجيل الدخول",
    },
    ayah: {
      title: "آية اليوم",
      text: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
      surah: "سورة المزمل - الآية 4",
      translation: "أَيْ: اقْرَأْهُ عَلَى تَمَهُّلٍ، فَإِنَّهُ يَكُونُ عَوْنًا عَلَى فَهْمِ الْقُرْآنِ وَتَدَبُّرِهِ.",
    }
  },
  en: {
    nav: {
      home: "Home",
      teachers: "Tutors",
      curriculum: "Curriculum",
      pricing: "Pricing",
      login: "Login",
      startNow: "Get Started",
    },
    hero: {
      badge: "Accredited Educational Platform",
      title: "Your Journey to Memerizing",
      titleAccent: "The Holy Quran",
      subtitle: "Learn Tajweed and Hifz with elite certified reciters from the Holy Mosques, using modern educational methods suitable for all ages.",
      ctaPrimary: "Start Free First Session",
      ctaSecondary: "Browse Reciters List",
      students: "Registered Students",
      teachers: "Certified Teachers",
      rating: "User Ratings",
    },
    features: {
      badge: "Why Us?",
      title: "Why Choose Our Platform?",
      subtitle: "We combine authenticity in education with modern technology to ensure a pleasant and effective learning journey.",
      f1Title: "Certified Tutors",
      f1Desc: "Elite reciters from the Islamic world with the highest levels of accreditation.",
      f2Title: "Interactive Environment",
      f2Desc: "Latest technologies for easy communication between teacher and student.",
      f3Title: "Family Packages",
      f3Desc: "Special discounts for families and groups to encourage everyone to memorize.",
      f4Title: "Continuous Follow-up",
      f4Desc: "Periodic reports to monitor student level and progress in Hifz and Tajweed.",
    },
    courses: {
      badge: "Our Services",
      title: "Integrated Educational Curricula",
      subtitle: "Study plans carefully designed to suit different levels and ages.",
      cta: "Browse All Programs",
      levels: {
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
      },
      c1Title: "Noorani Qaida",
      c1Desc: "The first step to learning correct pronunciation and Arabic reading foundation.",
      c2Title: "Tajweed Mastery",
      c2Desc: "Learn basic Tajweed rules and practice applying them in reading.",
      c3Title: "Hifz Program",
      c3Desc: "Customized plan for memorizing the Holy Quran with continuous review.",
      details: "Details & Registration",
    },
    profile: {
      title: "Profile",
      role: "Role",
      addChild: "Add Child",
      myChildren: "My Registered Children",
      noChildren: "No children registered yet",
      dependentRegistration: "Register New Dependent",
      childPassword: "Child Password",
      childProfile: "Child Profile",
      history: "Academic History",
      grades: "Grades",
      backToProfile: "Back to Profile",
      date: "Date",
      subject: "Subject",
      grade: "Grade",
      notes: "Notes",
      day: "Day",
      teacher: "Teacher",
      schedule: "Weekly Schedule",
    },
    schedule: {
      title: "Schedule",
      subtitle: "Manage your classes and track upcoming schedules.",
      upcomingClasses: "Upcoming Classes",
      bookClass: "Book New Class",
      today: "Today",
      teacher: "Teacher",
      time: "Time",
      duration: "Duration",
      status: "Status",
      join: "Join Now",
      noClasses: "No classes scheduled yet",
      subject: "Subject",
      group: "Group",
      level: "Level",
      selectSubject: "Select Subject",
      selectGroup: "Select Group",
      selectLevel: "Select Level",
      selectTeacher: "Select Teacher",
      male: "Male / Boys",
      female: "Female / Girls",
      minutes: "min",
      exitMeeting: "Exit Class",
    },
    messages: {
      title: "Messages",
      noMessages: "No messages yet",
      typeMessage: "Type your message here...",
      send: "Send",
      online: "Online",
      offline: "Offline",
    },
    registration: {
      maleTeacher: "Teacher Registration (M)",
      femaleTeacher: "Teacher Registration (F)",
      maleSupervisor: "Supervisor Registration (M)",
      femaleSupervisor: "Supervisor Registration (F)",
    },
    steps: {
      overline: "Your Journey to Enlightenment",
      title: "Three simple steps to start your spiritual growth.",
      s1Title: "Create Profile",
      s1Desc: "Share your learning goals and current level with us.",
      s2Title: "Book a Trial",
      s2Desc: "Meet your teacher and experience a 1-on-1 session.",
      s3Title: "Start Learning",
      s3Desc: "Begin your structured path toward Quranic mastery.",
    },
    auth: {
      loginTitle: "Login to Your Account",
      signupTitle: "Create New Account",
      forgotPasswordTitle: "Reset Password",
      email: "Email Address",
      password: "Password",
      fullName: "Full Name",
      forgotPassword: "Forgot Password?",
      noAccount: "Don't have an account?",
      haveAccount: "Already have an account?",
      ctaLogin: "Login",
      ctaSignup: "Sign Up Now",
      ctaReset: "Send Reset Link",
      socialLogin: "Or continue with",
      resetSuccess: "A password reset link has been sent to your email address.",
      backToLogin: "Back to Login",
    },
    ayah: {
      title: "Ayah of the Day",
      text: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
      surah: "Surah Al-Muzzammil - Verse 4",
      translation: "And recite the Qur’an with measured recitation.",
    }
  }
};
