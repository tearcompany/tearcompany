"use client";

import type React from "react";
import { useEffect, useState, useMemo } from "react";

interface Angel {
  index: number;
  name: string;
  start_time: string;
  end_time: string;
  archangel: string;
  zodiac_sign: string;
  zodiac_degree_start: number;
  zodiac_degree_end: number;
  psalm: string;
  element: string;
  sephira: string;
  color: string;
  principality: string;
  spiritual_gift: string;
  spiritual_description: string;
  invocation: string;
  daily_intention: string;
}

const angelsData: Angel[] = [
  {
    index: 1,
    name: "Vehuiah",
    start_time: "00:00",
    end_time: "00:20",
    archangel: "Metatron",
    zodiac_sign: "Aries",
    zodiac_degree_start: 0,
    zodiac_degree_end: 5,
    psalm: "Psalm 34",
    element: "Fire",
    sephira: "Keter",
    color: "Red",
    principality: "Divine Will",
    spiritual_gift: "Illumination and New Beginnings",
    spiritual_description:
      "Vehuiah brings the light of divine will into manifestation. This angel helps transform ideas into reality and guides new ventures with divine blessing.",
    invocation:
      "Vehuiah, angel of divine will, illuminate my path with your sacred fire. Help me manifest my highest purpose with courage and clarity.",
    daily_intention:
      "Today I align my will with divine purpose and take inspired action toward my highest good.",
  },
  {
    index: 2,
    name: "Jeliel",
    start_time: "00:20",
    end_time: "00:40",
    archangel: "Metatron",
    zodiac_sign: "Aries",
    zodiac_degree_start: 5,
    zodiac_degree_end: 10,
    psalm: "Psalm 93",
    element: "Fire",
    sephira: "Keter",
    color: "Red",
    principality: "Love and Wisdom",
    spiritual_gift: "Harmonious Relationships",
    spiritual_description:
      "Jeliel governs love between souls and brings wisdom to relationships. This angel helps heal conflicts and restore harmony in all connections.",
    invocation:
      "Jeliel, angel of love and wisdom, bless my relationships with understanding and compassion. Help me see the divine in all beings.",
    daily_intention:
      "Today I choose love over fear and seek to understand rather than to be understood.",
  },
  {
    index: 3,
    name: "Sitael",
    start_time: "00:40",
    end_time: "01:00",
    archangel: "Metatron",
    zodiac_sign: "Aries",
    zodiac_degree_start: 10,
    zodiac_degree_end: 15,
    psalm: "Psalm 22",
    element: "Fire",
    sephira: "Keter",
    color: "Red",
    principality: "Nobility and Generosity",
    spiritual_gift: "Magnanimity and Leadership",
    spiritual_description:
      "Sitael inspires noble actions and generous hearts. This angel helps overcome adversity through courage and teaches the power of giving.",
    invocation:
      "Sitael, angel of nobility, fill my heart with generosity and courage. Help me lead with wisdom and serve with humility.",
    daily_intention:
      "Today I act with nobility of spirit and extend generosity to all I encounter.",
  },
  {
    index: 4,
    name: "Elemiah",
    start_time: "01:00",
    end_time: "01:20",
    archangel: "Metatron",
    zodiac_sign: "Aries",
    zodiac_degree_start: 15,
    zodiac_degree_end: 20,
    psalm: "Psalm 54",
    element: "Fire",
    sephira: "Keter",
    color: "Red",
    principality: "Divine Protection",
    spiritual_gift: "Inner Peace and Calm",
    spiritual_description:
      "Elemiah brings divine protection and inner tranquility. This angel helps calm troubled minds and provides refuge from life's storms.",
    invocation:
      "Elemiah, angel of divine protection, surround me with your peaceful presence. Help me find calm in the center of any storm.",
    daily_intention:
      "Today I rest in divine protection and maintain inner peace regardless of external circumstances.",
  },
  {
    index: 5,
    name: "Mahasiah",
    start_time: "01:20",
    end_time: "01:40",
    archangel: "Metatron",
    zodiac_sign: "Aries",
    zodiac_degree_start: 20,
    zodiac_degree_end: 25,
    psalm: "Psalm 62",
    element: "Fire",
    sephira: "Keter",
    color: "Red",
    principality: "Rectification and Healing",
    spiritual_gift: "Purification and Renewal",
    spiritual_description:
      "Mahasiah governs purification and spiritual healing. This angel helps cleanse negative patterns and brings renewal to body, mind, and spirit.",
    invocation:
      "Mahasiah, angel of purification, cleanse my being of all that no longer serves. Help me embrace renewal and spiritual growth.",
    daily_intention:
      "Today I release what no longer serves me and welcome healing and renewal into my life.",
  },
  {
    index: 6,
    name: "Lelahel",
    start_time: "01:40",
    end_time: "02:00",
    archangel: "Metatron",
    zodiac_sign: "Aries",
    zodiac_degree_start: 25,
    zodiac_degree_end: 30,
    psalm: "Psalm 125",
    element: "Fire",
    sephira: "Keter",
    color: "Red",
    principality: "Divine Light and Fame",
    spiritual_gift: "Illumination and Recognition",
    spiritual_description:
      "Lelahel brings divine light and helps souls shine their authentic truth. This angel assists in gaining recognition for noble works and spiritual achievements.",
    invocation:
      "Lelahel, angel of divine light, help me shine my authentic truth with humility. Guide me to use any recognition for the highest good.",
    daily_intention:
      "Today I let my inner light shine authentically and use my gifts to serve the greater good.",
  },
  {
    index: 7,
    name: "Achaiah",
    start_time: "02:00",
    end_time: "02:20",
    archangel: "Raziel",
    zodiac_sign: "Taurus",
    zodiac_degree_start: 0,
    zodiac_degree_end: 5,
    psalm: "Psalm 98",
    element: "Earth",
    sephira: "Chokhmah",
    color: "Green",
    principality: "Patience and Discovery",
    spiritual_gift: "Understanding Nature's Secrets",
    spiritual_description:
      "Achaiah reveals the hidden wisdom in nature and teaches patience in spiritual development.",
    invocation:
      "Achaiah, help me discover the wisdom hidden in nature and develop patience in my spiritual journey.",
    daily_intention:
      "Today I seek wisdom in the natural world and practice patience in all my endeavors.",
  },
  {
    index: 8,
    name: "Cahetel",
    start_time: "02:20",
    end_time: "02:40",
    archangel: "Raziel",
    zodiac_sign: "Taurus",
    zodiac_degree_start: 5,
    zodiac_degree_end: 10,
    psalm: "Psalm 57",
    element: "Earth",
    sephira: "Chokhmah",
    color: "Green",
    principality: "Divine Blessing",
    spiritual_gift: "Agricultural Abundance",
    spiritual_description:
      "Cahetel blesses the fruits of labor and brings abundance through dedicated work.",
    invocation:
      "Cahetel, bless my work with abundance and help me appreciate the fruits of dedicated effort.",
    daily_intention:
      "Today I work with dedication and gratitude, trusting in divine blessing.",
  },
  {
    index: 9,
    name: "Haziel",
    start_time: "02:40",
    end_time: "03:00",
    archangel: "Raziel",
    zodiac_sign: "Taurus",
    zodiac_degree_start: 10,
    zodiac_degree_end: 15,
    psalm: "Psalm 51",
    element: "Earth",
    sephira: "Chokhmah",
    color: "Green",
    principality: "Divine Mercy",
    spiritual_gift: "Forgiveness and Reconciliation",
    spiritual_description:
      "Haziel brings divine mercy and helps heal relationships through forgiveness.",
    invocation:
      "Haziel, fill my heart with divine mercy and help me forgive as I am forgiven.",
    daily_intention:
      "Today I practice forgiveness and seek reconciliation where healing is needed.",
  },
  {
    index: 10,
    name: "Aladiah",
    start_time: "03:00",
    end_time: "03:20",
    archangel: "Raziel",
    zodiac_sign: "Taurus",
    zodiac_degree_start: 15,
    zodiac_degree_end: 20,
    psalm: "Psalm 26",
    element: "Earth",
    sephira: "Chokhmah",
    color: "Green",
    principality: "Divine Grace",
    spiritual_gift: "Healing and Recovery",
    spiritual_description:
      "Aladiah brings divine grace for healing and helps in recovery from illness.",
    invocation:
      "Aladiah, surround me with divine grace and support my healing journey.",
    daily_intention:
      "Today I receive divine grace and support others in their healing.",
  },
  {
    index: 11,
    name: "Lauviah",
    start_time: "03:20",
    end_time: "03:40",
    archangel: "Raziel",
    zodiac_sign: "Taurus",
    zodiac_degree_start: 20,
    zodiac_degree_end: 25,
    psalm: "Psalm 100",
    element: "Earth",
    sephira: "Chokhmah",
    color: "Green",
    principality: "Victory and Triumph",
    spiritual_gift: "Overcoming Obstacles",
    spiritual_description:
      "Lauviah grants victory over challenges and helps overcome seemingly impossible obstacles.",
    invocation:
      "Lauviah, grant me victory over my challenges and strength to overcome all obstacles.",
    daily_intention:
      "Today I face challenges with courage, knowing victory is possible through divine help.",
  },
  {
    index: 12,
    name: "Hahaiah",
    start_time: "03:40",
    end_time: "04:00",
    archangel: "Raziel",
    zodiac_sign: "Taurus",
    zodiac_degree_start: 25,
    zodiac_degree_end: 30,
    psalm: "Psalm 56",
    element: "Earth",
    sephira: "Chokhmah",
    color: "Green",
    principality: "Refuge and Shelter",
    spiritual_gift: "Protection from Enemies",
    spiritual_description:
      "Hahaiah provides refuge and protection from those who would cause harm.",
    invocation:
      "Hahaiah, be my refuge and protect me from all harm and negativity.",
    daily_intention:
      "Today I rest in divine protection and extend shelter to those in need.",
  },
  {
    index: 13,
    name: "Iezalel",
    start_time: "04:00",
    end_time: "04:20",
    archangel: "Tzaphkiel",
    zodiac_sign: "Gemini",
    zodiac_degree_start: 0,
    zodiac_degree_end: 5,
    psalm: "Psalm 64",
    element: "Air",
    sephira: "Binah",
    color: "Yellow",
    principality: "Friendship and Fidelity",
    spiritual_gift: "Loyal Relationships",
    spiritual_description:
      "Iezalel strengthens bonds of friendship and promotes fidelity in all relationships.",
    invocation:
      "Iezalel, bless my relationships with loyalty and help me be a faithful friend.",
    daily_intention:
      "Today I cultivate loyal friendships and practice fidelity in all my relationships.",
  },
  {
    index: 14,
    name: "Mebahel",
    start_time: "04:20",
    end_time: "04:40",
    archangel: "Tzaphkiel",
    zodiac_sign: "Gemini",
    zodiac_degree_start: 5,
    zodiac_degree_end: 10,
    psalm: "Psalm 91",
    element: "Air",
    sephira: "Binah",
    color: "Yellow",
    principality: "Truth and Justice",
    spiritual_gift: "Liberation from Oppression",
    spiritual_description:
      "Mebahel brings truth to light and helps liberate those who are oppressed.",
    invocation:
      "Mebahel, help me speak truth and work for justice and liberation.",
    daily_intention:
      "Today I stand for truth and work to liberate those who are oppressed.",
  },
  {
    index: 15,
    name: "Hariel",
    start_time: "04:40",
    end_time: "05:00",
    archangel: "Tzaphkiel",
    zodiac_sign: "Gemini",
    zodiac_degree_start: 10,
    zodiac_degree_end: 15,
    psalm: "Psalm 51",
    element: "Air",
    sephira: "Binah",
    color: "Yellow",
    principality: "Purification and Science",
    spiritual_gift: "Scientific Discovery",
    spiritual_description:
      "Hariel purifies the mind and inspires scientific and spiritual discoveries.",
    invocation:
      "Hariel, purify my mind and inspire me with wisdom for discovery and understanding.",
    daily_intention:
      "Today I approach learning with a pure mind and open heart.",
  },
  {
    index: 16,
    name: "Hakamiah",
    start_time: "05:00",
    end_time: "05:20",
    archangel: "Tzaphkiel",
    zodiac_sign: "Gemini",
    zodiac_degree_start: 15,
    zodiac_degree_end: 20,
    psalm: "Psalm 88",
    element: "Air",
    sephira: "Binah",
    color: "Yellow",
    principality: "Loyalty and Honor",
    spiritual_gift: "Faithful Service",
    spiritual_description:
      "Hakamiah inspires loyalty and honor in service to the divine and others.",
    invocation:
      "Hakamiah, help me serve with loyalty and honor in all my endeavors.",
    daily_intention:
      "Today I serve with loyalty and maintain honor in all my actions.",
  },
  {
    index: 17,
    name: "Lauviah",
    start_time: "05:20",
    end_time: "05:40",
    archangel: "Tzaphkiel",
    zodiac_sign: "Gemini",
    zodiac_degree_start: 20,
    zodiac_degree_end: 25,
    psalm: "Psalm 72",
    element: "Air",
    sephira: "Binah",
    color: "Yellow",
    principality: "Revelation and Fame",
    spiritual_gift: "Divine Revelations",
    spiritual_description:
      "Lauviah brings divine revelations and helps gain recognition for spiritual work.",
    invocation:
      "Lauviah, open my mind to divine revelations and help me use recognition wisely.",
    daily_intention:
      "Today I remain open to divine revelations and use any recognition for good.",
  },
  {
    index: 18,
    name: "Caliel",
    start_time: "05:40",
    end_time: "06:00",
    archangel: "Tzaphkiel",
    zodiac_sign: "Gemini",
    zodiac_degree_start: 25,
    zodiac_degree_end: 30,
    psalm: "Psalm 55",
    element: "Air",
    sephira: "Binah",
    color: "Yellow",
    principality: "Divine Justice",
    spiritual_gift: "Truth in Judgment",
    spiritual_description:
      "Caliel brings divine justice and helps discern truth in all situations.",
    invocation:
      "Caliel, help me discern truth and act with divine justice in all situations.",
    daily_intention: "Today I seek truth and act with justice and fairness.",
  },
  {
    index: 19,
    name: "Leuviah",
    start_time: "06:00",
    end_time: "06:20",
    archangel: "Zadkiel",
    zodiac_sign: "Cancer",
    zodiac_degree_start: 0,
    zodiac_degree_end: 5,
    psalm: "Psalm 103",
    element: "Water",
    sephira: "Chesed",
    color: "Silver",
    principality: "Divine Memory",
    spiritual_gift: "Expanded Memory",
    spiritual_description:
      "Leuviah enhances memory and helps recall important spiritual lessons.",
    invocation:
      "Leuviah, expand my memory and help me recall the wisdom I need.",
    daily_intention:
      "Today I trust my memory and recall the wisdom that serves my highest good.",
  },
  {
    index: 20,
    name: "Pahaliah",
    start_time: "06:20",
    end_time: "06:40",
    archangel: "Zadkiel",
    zodiac_sign: "Cancer",
    zodiac_degree_start: 5,
    zodiac_degree_end: 10,
    psalm: "Psalm 96",
    element: "Water",
    sephira: "Chesed",
    color: "Silver",
    principality: "Redemption and Virtue",
    spiritual_gift: "Moral Awakening",
    spiritual_description:
      "Pahaliah brings redemption and awakens virtue in the human heart.",
    invocation:
      "Pahaliah, awaken virtue in my heart and guide me toward redemption.",
    daily_intention:
      "Today I choose virtue and seek redemption where I have fallen short.",
  },
  {
    index: 21,
    name: "Nelchael",
    start_time: "06:40",
    end_time: "07:00",
    archangel: "Zadkiel",
    zodiac_sign: "Cancer",
    zodiac_degree_start: 10,
    zodiac_degree_end: 15,
    psalm: "Psalm 95",
    element: "Water",
    sephira: "Chesed",
    color: "Silver",
    principality: "Learning and Teaching",
    spiritual_gift: "Wisdom and Knowledge",
    spiritual_description:
      "Nelchael inspires love of learning and the ability to teach others.",
    invocation:
      "Nelchael, inspire my love of learning and help me teach with wisdom.",
    daily_intention:
      "Today I embrace learning and share knowledge with others generously.",
  },
  {
    index: 22,
    name: "Ieiaiel",
    start_time: "07:00",
    end_time: "07:20",
    archangel: "Zadkiel",
    zodiac_sign: "Cancer",
    zodiac_degree_start: 15,
    zodiac_degree_end: 20,
    psalm: "Psalm 20",
    element: "Water",
    sephira: "Chesed",
    color: "Silver",
    principality: "Fortune and Fame",
    spiritual_gift: "Prosperity and Recognition",
    spiritual_description:
      "Ieiaiel brings good fortune and helps achieve recognition for worthy endeavors.",
    invocation:
      "Ieiaiel, bless me with good fortune and help me use prosperity wisely.",
    daily_intention:
      "Today I attract good fortune and use my blessings to help others.",
  },
  {
    index: 23,
    name: "Melahel",
    start_time: "07:20",
    end_time: "07:40",
    archangel: "Zadkiel",
    zodiac_sign: "Cancer",
    zodiac_degree_start: 20,
    zodiac_degree_end: 25,
    psalm: "Psalm 24",
    element: "Water",
    sephira: "Chesed",
    color: "Silver",
    principality: "Healing Waters",
    spiritual_gift: "Curative Powers",
    spiritual_description:
      "Melahel governs healing through water and natural remedies.",
    invocation:
      "Melahel, channel healing energy through me and guide me to natural remedies.",
    daily_intention:
      "Today I seek healing through natural means and offer healing to others.",
  },
  {
    index: 24,
    name: "Haheuiah",
    start_time: "07:40",
    end_time: "08:00",
    archangel: "Zadkiel",
    zodiac_sign: "Cancer",
    zodiac_degree_start: 25,
    zodiac_degree_end: 30,
    psalm: "Psalm 77",
    element: "Water",
    sephira: "Chesed",
    color: "Silver",
    principality: "Protection and Refuge",
    spiritual_gift: "Safe Haven",
    spiritual_description:
      "Haheuiah provides protection and serves as a refuge in times of trouble.",
    invocation: "Haheuiah, be my protection and refuge in times of trouble.",
    daily_intention:
      "Today I rest in divine protection and offer refuge to those in need.",
  },
  {
    index: 25,
    name: "Nith-Haiah",
    start_time: "08:00",
    end_time: "08:20",
    archangel: "Camael",
    zodiac_sign: "Leo",
    zodiac_degree_start: 0,
    zodiac_degree_end: 5,
    psalm: "Psalm 36",
    element: "Fire",
    sephira: "Gevurah",
    color: "Gold",
    principality: "Wisdom and Magic",
    spiritual_gift: "Spiritual Wisdom",
    spiritual_description:
      "Nith-Haiah grants access to spiritual wisdom and sacred knowledge.",
    invocation:
      "Nith-Haiah, grant me access to spiritual wisdom and sacred knowledge.",
    daily_intention:
      "Today I seek spiritual wisdom and use sacred knowledge responsibly.",
  },
  {
    index: 26,
    name: "Haaiah",
    start_time: "08:20",
    end_time: "08:40",
    archangel: "Camael",
    zodiac_sign: "Leo",
    zodiac_degree_start: 5,
    zodiac_degree_end: 10,
    psalm: "Psalm 146",
    element: "Fire",
    sephira: "Gevurah",
    color: "Gold",
    principality: "Political Wisdom",
    spiritual_gift: "Diplomatic Skills",
    spiritual_description:
      "Haaiah grants wisdom in political matters and diplomatic relations.",
    invocation:
      "Haaiah, grant me wisdom in dealing with others and diplomatic skills.",
    daily_intention:
      "Today I practice wisdom in my interactions and seek diplomatic solutions.",
  },
  {
    index: 27,
    name: "Ierathel",
    start_time: "08:40",
    end_time: "09:00",
    archangel: "Camael",
    zodiac_sign: "Leo",
    zodiac_degree_start: 10,
    zodiac_degree_end: 15,
    psalm: "Psalm 76",
    element: "Fire",
    sephira: "Gevurah",
    color: "Gold",
    principality: "Confusion of Enemies",
    spiritual_gift: "Protection from Opposition",
    spiritual_description:
      "Ierathel confuses those who oppose divine will and protects the righteous.",
    invocation:
      "Ierathel, protect me from opposition and confusion of enemies.",
    daily_intention:
      "Today I am protected from those who would oppose my highest good.",
  },
  {
    index: 28,
    name: "Seheiah",
    start_time: "09:00",
    end_time: "09:20",
    archangel: "Camael",
    zodiac_sign: "Leo",
    zodiac_degree_start: 15,
    zodiac_degree_end: 20,
    psalm: "Psalm 12",
    element: "Fire",
    sephira: "Gevurah",
    color: "Gold",
    principality: "Longevity and Health",
    spiritual_gift: "Vitality and Healing",
    spiritual_description:
      "Seheiah grants longevity and protects against illness and accidents.",
    invocation:
      "Seheiah, bless me with health and vitality for a long and purposeful life.",
    daily_intention: "Today I care for my health and vitality as sacred gifts.",
  },
  {
    index: 29,
    name: "Reiyel",
    start_time: "09:20",
    end_time: "09:40",
    archangel: "Camael",
    zodiac_sign: "Leo",
    zodiac_degree_start: 20,
    zodiac_degree_end: 25,
    psalm: "Psalm 18",
    element: "Fire",
    sephira: "Gevurah",
    color: "Gold",
    principality: "Liberation from Enemies",
    spiritual_gift: "Freedom from Opposition",
    spiritual_description:
      "Reiyel liberates from enemies and helps overcome those who oppose spiritual growth.",
    invocation:
      "Reiyel, liberate me from all enemies and opposition to my spiritual growth.",
    daily_intention:
      "Today I am free from all opposition and move forward in spiritual growth.",
  },
  {
    index: 30,
    name: "Omael",
    start_time: "09:40",
    end_time: "10:00",
    archangel: "Camael",
    zodiac_sign: "Leo",
    zodiac_degree_start: 25,
    zodiac_degree_end: 30,
    psalm: "Psalm 134",
    element: "Fire",
    sephira: "Gevurah",
    color: "Gold",
    principality: "Patience and Fertility",
    spiritual_gift: "Fruitful Endeavors",
    spiritual_description:
      "Omael grants patience and makes endeavors fruitful and productive.",
    invocation:
      "Omael, grant me patience and make my endeavors fruitful and productive.",
    daily_intention:
      "Today I practice patience and trust that my efforts will bear fruit.",
  },
  {
    index: 31,
    name: "Lecabel",
    start_time: "10:00",
    end_time: "10:20",
    archangel: "Raphael",
    zodiac_sign: "Virgo",
    zodiac_degree_start: 0,
    zodiac_degree_end: 5,
    psalm: "Psalm 70",
    element: "Earth",
    sephira: "Tiferet",
    color: "Olive",
    principality: "Vegetation and Agriculture",
    spiritual_gift: "Natural Abundance",
    spiritual_description:
      "Lecabel governs vegetation and brings abundance through agricultural wisdom.",
    invocation:
      "Lecabel, bless the earth with abundance and help me work in harmony with nature.",
    daily_intention:
      "Today I work in harmony with nature and appreciate earth's abundance.",
  },
  {
    index: 32,
    name: "Vasariah",
    start_time: "10:20",
    end_time: "10:40",
    archangel: "Raphael",
    zodiac_sign: "Virgo",
    zodiac_degree_start: 5,
    zodiac_degree_end: 10,
    psalm: "Psalm 17",
    element: "Earth",
    sephira: "Tiferet",
    color: "Olive",
    principality: "Justice and Clemency",
    spiritual_gift: "Merciful Justice",
    spiritual_description:
      "Vasariah brings justice tempered with mercy and clemency.",
    invocation: "Vasariah, help me practice justice with mercy and clemency.",
    daily_intention:
      "Today I seek justice while extending mercy and understanding.",
  },
  {
    index: 33,
    name: "Yehuiah",
    start_time: "10:40",
    end_time: "11:00",
    archangel: "Raphael",
    zodiac_sign: "Virgo",
    zodiac_degree_start: 10,
    zodiac_degree_end: 15,
    psalm: "Psalm 75",
    element: "Earth",
    sephira: "Tiferet",
    color: "Olive",
    principality: "Subordination and Obedience",
    spiritual_gift: "Humble Service",
    spiritual_description:
      "Yehuiah teaches the wisdom of humble service and proper subordination to divine will.",
    invocation:
      "Yehuiah, teach me humble service and alignment with divine will.",
    daily_intention:
      "Today I serve humbly and align my will with divine purpose.",
  },
  {
    index: 34,
    name: "Lehahiah",
    start_time: "11:00",
    end_time: "11:20",
    archangel: "Raphael",
    zodiac_sign: "Virgo",
    zodiac_degree_start: 15,
    zodiac_degree_end: 20,
    psalm: "Psalm 80",
    element: "Earth",
    sephira: "Tiferet",
    color: "Olive",
    principality: "Divine Order and Obedience",
    spiritual_gift: "Discipline and Spiritual Authority",
    spiritual_description:
      "Lehahiah governs divine order and helps establish spiritual discipline. This angel assists in aligning with cosmic law and developing inner authority.",
    invocation:
      "Lehahiah, angel of divine order, help me align with cosmic law and develop spiritual discipline. Guide me to use authority with wisdom and compassion.",
    daily_intention:
      "Today I align with divine order and exercise spiritual discipline in all my actions.",
  },
  {
    index: 35,
    name: "Chavakiah",
    start_time: "11:20",
    end_time: "11:40",
    archangel: "Raphael",
    zodiac_sign: "Virgo",
    zodiac_degree_start: 20,
    zodiac_degree_end: 25,
    psalm: "Psalm 115",
    element: "Earth",
    sephira: "Tiferet",
    color: "Olive",
    principality: "Family Harmony",
    spiritual_gift: "Reconciliation",
    spiritual_description:
      "Chavakiah brings harmony to families and helps reconcile differences between loved ones.",
    invocation:
      "Chavakiah, bring harmony to my family and help reconcile all differences with love.",
    daily_intention:
      "Today I work for harmony in my family and seek reconciliation where needed.",
  },
  {
    index: 36,
    name: "Menadel",
    start_time: "11:40",
    end_time: "12:00",
    archangel: "Raphael",
    zodiac_sign: "Virgo",
    zodiac_degree_start: 25,
    zodiac_degree_end: 30,
    psalm: "Psalm 15",
    element: "Earth",
    sephira: "Tiferet",
    color: "Olive",
    principality: "Work and Employment",
    spiritual_gift: "Meaningful Work",
    spiritual_description:
      "Menadel helps find meaningful work and maintains employment that serves one's purpose.",
    invocation:
      "Menadel, guide me to meaningful work that serves my highest purpose.",
    daily_intention:
      "Today I seek work that aligns with my purpose and serves the greater good.",
  },
  {
    index: 37,
    name: "Aniel",
    start_time: "12:00",
    end_time: "12:20",
    archangel: "Haniel",
    zodiac_sign: "Libra",
    zodiac_degree_start: 0,
    zodiac_degree_end: 5,
    psalm: "Psalm 109",
    element: "Air",
    sephira: "Netzach",
    color: "Blue",
    principality: "Victory and Courage",
    spiritual_gift: "Overcoming Fear",
    spiritual_description:
      "Aniel grants victory over fear and gives courage to face any challenge.",
    invocation:
      "Aniel, grant me victory over fear and courage to face all challenges.",
    daily_intention:
      "Today I face all challenges with courage and overcome my fears.",
  },
  {
    index: 38,
    name: "Haamiah",
    start_time: "12:20",
    end_time: "12:40",
    archangel: "Haniel",
    zodiac_sign: "Libra",
    zodiac_degree_start: 5,
    zodiac_degree_end: 10,
    psalm: "Psalm 137",
    element: "Air",
    sephira: "Netzach",
    color: "Blue",
    principality: "Religious Ceremonies",
    spiritual_gift: "Sacred Ritual",
    spiritual_description:
      "Haamiah governs religious ceremonies and helps establish meaningful spiritual practices.",
    invocation:
      "Haamiah, help me establish meaningful spiritual practices and sacred rituals.",
    daily_intention:
      "Today I honor the sacred through meaningful spiritual practice.",
  },
  {
    index: 39,
    name: "Rehael",
    start_time: "12:40",
    end_time: "13:00",
    archangel: "Haniel",
    zodiac_sign: "Libra",
    zodiac_degree_start: 10,
    zodiac_degree_end: 15,
    psalm: "Psalm 38",
    element: "Air",
    sephira: "Netzach",
    color: "Blue",
    principality: "Filial Love",
    spiritual_gift: "Family Bonds",
    spiritual_description:
      "Rehael strengthens bonds between parents and children and promotes filial love.",
    invocation:
      "Rehael, strengthen the bonds of love between parents and children.",
    daily_intention:
      "Today I honor my family bonds and express love to my relatives.",
  },
  {
    index: 40,
    name: "Ieiazel",
    start_time: "13:00",
    end_time: "13:20",
    archangel: "Haniel",
    zodiac_sign: "Libra",
    zodiac_degree_start: 15,
    zodiac_degree_end: 20,
    psalm: "Psalm 141",
    element: "Air",
    sephira: "Netzach",
    color: "Blue",
    principality: "Joy and Consolation",
    spiritual_gift: "Comfort in Sorrow",
    spiritual_description:
      "Ieiazel brings joy and consolation to those who are sorrowful or grieving.",
    invocation:
      "Ieiazel, bring joy to my heart and console me in times of sorrow.",
    daily_intention:
      "Today I find joy even in difficulty and offer consolation to others.",
  },
  {
    index: 41,
    name: "Hahahel",
    start_time: "13:20",
    end_time: "13:40",
    archangel: "Haniel",
    zodiac_sign: "Libra",
    zodiac_degree_start: 20,
    zodiac_degree_end: 25,
    psalm: "Psalm 29",
    element: "Air",
    sephira: "Netzach",
    color: "Blue",
    principality: "Spiritual Mission",
    spiritual_gift: "Divine Calling",
    spiritual_description:
      "Hahahel helps discover and fulfill one's spiritual mission and divine calling.",
    invocation:
      "Hahahel, help me discover and fulfill my spiritual mission and divine calling.",
    daily_intention:
      "Today I seek to understand and fulfill my spiritual mission.",
  },
  {
    index: 42,
    name: "Mikael",
    start_time: "13:40",
    end_time: "14:00",
    archangel: "Haniel",
    zodiac_sign: "Libra",
    zodiac_degree_start: 25,
    zodiac_degree_end: 30,
    psalm: "Psalm 37",
    element: "Air",
    sephira: "Netzach",
    color: "Blue",
    principality: "Political Order",
    spiritual_gift: "Leadership Wisdom",
    spiritual_description:
      "Mikael brings order to political situations and grants wisdom to leaders.",
    invocation:
      "Mikael, grant wisdom to leaders and bring order to political situations.",
    daily_intention:
      "Today I pray for wise leadership and work for political harmony.",
  },
  {
    index: 43,
    name: "Veuahiah",
    start_time: "14:00",
    end_time: "14:20",
    archangel: "Michael",
    zodiac_sign: "Scorpio",
    zodiac_degree_start: 0,
    zodiac_degree_end: 5,
    psalm: "Psalm 29",
    element: "Water",
    sephira: "Hod",
    color: "Black",
    principality: "Destruction of Enemies",
    spiritual_gift: "Victory over Opposition",
    spiritual_description:
      "Veuahiah destroys enemies and grants victory over all forms of opposition.",
    invocation:
      "Veuahiah, grant me victory over all opposition and destroy what opposes my growth.",
    daily_intention:
      "Today I overcome all opposition and move forward with divine protection.",
  },
  {
    index: 44,
    name: "Yelahiah",
    start_time: "14:20",
    end_time: "14:40",
    archangel: "Michael",
    zodiac_sign: "Scorpio",
    zodiac_degree_start: 5,
    zodiac_degree_end: 10,
    psalm: "Psalm 105",
    element: "Water",
    sephira: "Hod",
    color: "Black",
    principality: "Warrior Courage",
    spiritual_gift: "Bravery in Battle",
    spiritual_description:
      "Yelahiah grants courage to warriors and bravery in spiritual battles.",
    invocation:
      "Yelahiah, grant me courage in spiritual battles and bravery to face challenges.",
    daily_intention:
      "Today I face spiritual battles with courage and divine protection.",
  },
  {
    index: 45,
    name: "Sealiah",
    start_time: "14:40",
    end_time: "15:00",
    archangel: "Michael",
    zodiac_sign: "Scorpio",
    zodiac_degree_start: 10,
    zodiac_degree_end: 15,
    psalm: "Psalm 19",
    element: "Water",
    sephira: "Hod",
    color: "Black",
    principality: "Vegetation and Nature",
    spiritual_gift: "Natural Healing",
    spiritual_description:
      "Sealiah governs vegetation and provides healing through natural remedies.",
    invocation:
      "Sealiah, provide healing through nature and help me connect with natural remedies.",
    daily_intention:
      "Today I seek healing through nature and appreciate the gifts of vegetation.",
  },
  {
    index: 46,
    name: "Ariel",
    start_time: "15:00",
    end_time: "15:20",
    archangel: "Michael",
    zodiac_sign: "Scorpio",
    zodiac_degree_start: 15,
    zodiac_degree_end: 20,
    psalm: "Psalm 142",
    element: "Water",
    sephira: "Hod",
    color: "Black",
    principality: "Hidden Treasures",
    spiritual_gift: "Discovery of Secrets",
    spiritual_description:
      "Ariel reveals hidden treasures and helps discover spiritual secrets.",
    invocation:
      "Ariel, reveal hidden treasures and help me discover spiritual secrets.",
    daily_intention:
      "Today I remain open to discovering hidden treasures and spiritual secrets.",
  },
  {
    index: 47,
    name: "Asaliah",
    start_time: "15:20",
    end_time: "15:40",
    archangel: "Michael",
    zodiac_sign: "Scorpio",
    zodiac_degree_start: 20,
    zodiac_degree_end: 25,
    psalm: "Psalm 54",
    element: "Water",
    sephira: "Hod",
    color: "Black",
    principality: "Divine Justice",
    spiritual_gift: "Truth and Justice",
    spiritual_description:
      "Asaliah brings divine justice and helps establish truth in all matters.",
    invocation:
      "Asaliah, bring divine justice and help establish truth in all matters.",
    daily_intention:
      "Today I work for justice and seek truth in all my dealings.",
  },
  {
    index: 48,
    name: "Mihael",
    start_time: "15:40",
    end_time: "16:00",
    archangel: "Michael",
    zodiac_sign: "Scorpio",
    zodiac_degree_start: 25,
    zodiac_degree_end: 30,
    psalm: "Psalm 141",
    element: "Water",
    sephira: "Hod",
    color: "Black",
    principality: "Fertility and Generation",
    spiritual_gift: "Creative Power",
    spiritual_description:
      "Mihael governs fertility and generation, both physical and spiritual.",
    invocation:
      "Mihael, bless me with creative power and fertility in all my endeavors.",
    daily_intention:
      "Today I channel creative power and fertility into all my projects.",
  },
  {
    index: 49,
    name: "Vehuel",
    start_time: "16:00",
    end_time: "16:20",
    archangel: "Gabriel",
    zodiac_sign: "Sagittarius",
    zodiac_degree_start: 0,
    zodiac_degree_end: 5,
    psalm: "Psalm 68",
    element: "Fire",
    sephira: "Yesod",
    color: "Purple",
    principality: "Elevation and Grandeur",
    spiritual_gift: "Spiritual Elevation",
    spiritual_description:
      "Vehuel elevates the soul and grants spiritual grandeur and nobility.",
    invocation:
      "Vehuel, elevate my soul and grant me spiritual grandeur and nobility.",
    daily_intention:
      "Today I seek spiritual elevation and express nobility in all my actions.",
  },
  {
    index: 50,
    name: "Daniel",
    start_time: "16:20",
    end_time: "16:40",
    archangel: "Gabriel",
    zodiac_sign: "Sagittarius",
    zodiac_degree_start: 5,
    zodiac_degree_end: 10,
    psalm: "Psalm 14",
    element: "Fire",
    sephira: "Yesod",
    color: "Purple",
    principality: "Eloquence and Mercy",
    spiritual_gift: "Persuasive Speech",
    spiritual_description:
      "Daniel grants eloquence in speech and the ability to persuade with mercy.",
    invocation:
      "Daniel, grant me eloquence in speech and the ability to persuade with mercy.",
    daily_intention:
      "Today I speak with eloquence and persuade others through mercy and kindness.",
  },
  {
    index: 51,
    name: "Hahasiah",
    start_time: "16:40",
    end_time: "17:00",
    archangel: "Gabriel",
    zodiac_sign: "Sagittarius",
    zodiac_degree_start: 10,
    zodiac_degree_end: 15,
    psalm: "Psalm 48",
    element: "Fire",
    sephira: "Yesod",
    color: "Purple",
    principality: "Universal Medicine",
    spiritual_gift: "Healing Knowledge",
    spiritual_description:
      "Hahasiah provides knowledge of universal medicine and healing arts.",
    invocation:
      "Hahasiah, grant me knowledge of healing arts and universal medicine.",
    daily_intention:
      "Today I seek knowledge of healing and use it to help others.",
  },
  {
    index: 52,
    name: "Imamaiah",
    start_time: "17:00",
    end_time: "17:20",
    archangel: "Gabriel",
    zodiac_sign: "Sagittarius",
    zodiac_degree_start: 15,
    zodiac_degree_end: 20,
    psalm: "Psalm 34",
    element: "Fire",
    sephira: "Yesod",
    color: "Purple",
    principality: "Destruction of Enemies",
    spiritual_gift: "Liberation from Opposition",
    spiritual_description:
      "Imamaiah destroys enemies and liberates from all forms of opposition.",
    invocation:
      "Imamaiah, liberate me from all opposition and destroy what hinders my growth.",
    daily_intention:
      "Today I am liberated from all opposition and move forward freely.",
  },
  {
    index: 53,
    name: "Nanael",
    start_time: "17:20",
    end_time: "17:40",
    archangel: "Gabriel",
    zodiac_sign: "Sagittarius",
    zodiac_degree_start: 20,
    zodiac_degree_end: 25,
    psalm: "Psalm 73",
    element: "Fire",
    sephira: "Yesod",
    color: "Purple",
    principality: "Spiritual Communication",
    spiritual_gift: "Divine Messages",
    spiritual_description:
      "Nanael facilitates communication with the spiritual realm and divine messages.",
    invocation:
      "Nanael, help me communicate with the spiritual realm and receive divine messages.",
    daily_intention:
      "Today I remain open to divine messages and spiritual communication.",
  },
  {
    index: 54,
    name: "Nithael",
    start_time: "17:40",
    end_time: "18:00",
    archangel: "Gabriel",
    zodiac_sign: "Sagittarius",
    zodiac_degree_start: 25,
    zodiac_degree_end: 30,
    psalm: "Psalm 23",
    element: "Fire",
    sephira: "Yesod",
    color: "Purple",
    principality: "Eternal Youth",
    spiritual_gift: "Rejuvenation",
    spiritual_description:
      "Nithael grants eternal youth and rejuvenation of body, mind, and spirit.",
    invocation: "Nithael, grant me rejuvenation and eternal youth of spirit.",
    daily_intention:
      "Today I embrace rejuvenation and maintain youthful spirit.",
  },
  {
    index: 55,
    name: "Mebahiah",
    start_time: "18:00",
    end_time: "18:20",
    archangel: "Sandalphon",
    zodiac_sign: "Sagittarius",
    zodiac_degree_start: 0,
    zodiac_degree_end: 5,
    psalm: "Psalm 74",
    element: "Earth",
    sephira: "Malkuth",
    color: "Brown",
    principality: "Intellectual Lucidity",
    spiritual_gift: "Clear Thinking",
    spiritual_description:
      "Mebahiah grants intellectual lucidity and clear thinking in complex matters.",
    invocation: "Mebahiah, grant me intellectual lucidity and clear thinking.",
    daily_intention:
      "Today I think clearly and approach complex matters with lucidity.",
  },
  {
    index: 56,
    name: "Poyel",
    start_time: "18:20",
    end_time: "18:40",
    archangel: "Sandalphon",
    zodiac_sign: "Sagittarius",
    zodiac_degree_start: 5,
    zodiac_degree_end: 10,
    psalm: "Psalm 112",
    element: "Earth",
    sephira: "Malkuth",
    color: "Brown",
    principality: "Fortune and Support",
    spiritual_gift: "Material Blessings",
    spiritual_description:
      "Poyel brings good fortune and material support for spiritual endeavors.",
    invocation:
      "Poyel, bring good fortune and material support for my spiritual endeavors.",
    daily_intention:
      "Today I attract good fortune and use material blessings for spiritual growth.",
  },
  {
    index: 57,
    name: "Nemamiah",
    start_time: "18:40",
    end_time: "19:00",
    archangel: "Sandalphon",
    zodiac_sign: "Sagittarius",
    zodiac_degree_start: 10,
    zodiac_degree_end: 15,
    psalm: "Psalm 106",
    element: "Earth",
    sephira: "Malkuth",
    color: "Brown",
    principality: "Prosperity and Leadership",
    spiritual_gift: "Successful Leadership",
    spiritual_description:
      "Nemamiah grants prosperity and the ability to lead others successfully.",
    invocation:
      "Nemamiah, grant me prosperity and the ability to lead others successfully.",
    daily_intention:
      "Today I lead with wisdom and attract prosperity through service.",
  },
  {
    index: 58,
    name: "Ieialel",
    start_time: "19:00",
    end_time: "19:20",
    archangel: "Sandalphon",
    zodiac_sign: "Sagittarius",
    zodiac_degree_start: 15,
    zodiac_degree_end: 20,
    psalm: "Psalm 104",
    element: "Earth",
    sephira: "Malkuth",
    color: "Brown",
    principality: "Mental Strength",
    spiritual_gift: "Psychological Healing",
    spiritual_description:
      "Ieialel grants mental strength and helps heal psychological wounds.",
    invocation:
      "Ieialel, grant me mental strength and heal my psychological wounds.",
    daily_intention:
      "Today I strengthen my mind and heal from past psychological wounds.",
  },
  {
    index: 59,
    name: "Harahel",
    start_time: "19:20",
    end_time: "19:40",
    archangel: "Sandalphon",
    zodiac_sign: "Sagittarius",
    zodiac_degree_start: 20,
    zodiac_degree_end: 25,
    psalm: "Psalm 133",
    element: "Earth",
    sephira: "Malkuth",
    color: "Brown",
    principality: "Intellectual Riches",
    spiritual_gift: "Wisdom and Knowledge",
    spiritual_description:
      "Harahel grants intellectual riches and accumulation of wisdom and knowledge.",
    invocation:
      "Harahel, grant me intellectual riches and accumulation of wisdom.",
    daily_intention:
      "Today I accumulate wisdom and share intellectual riches with others.",
  },
  {
    index: 60,
    name: "Mitzrael",
    start_time: "19:40",
    end_time: "20:00",
    archangel: "Sandalphon",
    zodiac_sign: "Sagittarius",
    zodiac_degree_start: 25,
    zodiac_degree_end: 30,
    psalm: "Psalm 60",
    element: "Earth",
    sephira: "Malkuth",
    color: "Brown",
    principality: "Internal Reparation",
    spiritual_gift: "Spiritual Healing",
    spiritual_description:
      "Mitzrael provides internal reparation and deep spiritual healing.",
    invocation:
      "Mitzrael, provide internal reparation and deep spiritual healing.",
    daily_intention:
      "Today I receive deep spiritual healing and internal reparation.",
  },
  {
    index: 61,
    name: "Umabel",
    start_time: "20:00",
    end_time: "20:20",
    archangel: "Raguel",
    zodiac_sign: "Aquarius",
    zodiac_degree_start: 0,
    zodiac_degree_end: 5,
    psalm: "Psalm 30",
    element: "Air",
    sephira: "Keter",
    color: "Sky Blue",
    principality: "Friendship and Affinity",
    spiritual_gift: "Harmonious Relationships",
    spiritual_description:
      "Umabel creates friendship and affinity between people and harmonious relationships.",
    invocation: "Umabel, create friendship and affinity in my relationships.",
    daily_intention:
      "Today I cultivate friendship and create harmonious relationships.",
  },
  {
    index: 62,
    name: "Iah-Hel",
    start_time: "20:20",
    end_time: "20:40",
    archangel: "Raguel",
    zodiac_sign: "Aquarius",
    zodiac_degree_start: 5,
    zodiac_degree_end: 10,
    psalm: "Psalm 147",
    element: "Air",
    sephira: "Keter",
    color: "Sky Blue",
    principality: "Desire for Knowledge",
    spiritual_gift: "Love of Learning",
    spiritual_description:
      "Iah-Hel inspires desire for knowledge and love of learning and wisdom.",
    invocation:
      "Iah-Hel, inspire my desire for knowledge and love of learning.",
    daily_intention:
      "Today I pursue knowledge with passion and love of learning.",
  },
  {
    index: 63,
    name: "Anauel",
    start_time: "20:40",
    end_time: "21:00",
    archangel: "Raguel",
    zodiac_sign: "Aquarius",
    zodiac_degree_start: 10,
    zodiac_degree_end: 15,
    psalm: "Psalm 105",
    element: "Air",
    sephira: "Keter",
    color: "Sky Blue",
    principality: "Unity and Perception",
    spiritual_gift: "Spiritual Perception",
    spiritual_description:
      "Anauel promotes unity and enhances spiritual perception and understanding.",
    invocation: "Anauel, promote unity and enhance my spiritual perception.",
    daily_intention:
      "Today I work for unity and develop my spiritual perception.",
  },
  {
    index: 64,
    name: "Mehiel",
    start_time: "21:00",
    end_time: "21:20",
    archangel: "Raguel",
    zodiac_sign: "Aquarius",
    zodiac_degree_start: 15,
    zodiac_degree_end: 20,
    psalm: "Psalm 56",
    element: "Air",
    sephira: "Keter",
    color: "Sky Blue",
    principality: "Vivification and Fecundity",
    spiritual_gift: "Life Force",
    spiritual_description:
      "Mehiel brings vivification and fecundity, enhancing life force and vitality.",
    invocation:
      "Mehiel, enhance my life force and bring vitality to all my endeavors.",
    daily_intention:
      "Today I channel strong life force and bring vitality to everything I do.",
  },
  {
    index: 65,
    name: "Damabiah",
    start_time: "21:20",
    end_time: "21:40",
    archangel: "Raguel",
    zodiac_sign: "Aquarius",
    zodiac_degree_start: 20,
    zodiac_degree_end: 25,
    psalm: "Psalm 40",
    element: "Air",
    sephira: "Keter",
    color: "Sky Blue",
    principality: "Naval Wisdom",
    spiritual_gift: "Navigation and Guidance",
    spiritual_description:
      "Damabiah provides wisdom for navigation, both physical and spiritual journeys.",
    invocation:
      "Damabiah, provide wisdom for navigation on my spiritual journey.",
    daily_intention:
      "Today I navigate my spiritual journey with wisdom and divine guidance.",
  },
  {
    index: 66,
    name: "Manakel",
    start_time: "21:40",
    end_time: "22:00",
    archangel: "Raguel",
    zodiac_sign: "Aquarius",
    zodiac_degree_start: 25,
    zodiac_degree_end: 30,
    psalm: "Psalm 107",
    element: "Air",
    sephira: "Keter",
    color: "Sky Blue",
    principality: "Knowledge of Good and Evil",
    spiritual_gift: "Moral Discernment",
    spiritual_description:
      "Manakel grants knowledge of good and evil and the ability to discern morally.",
    invocation:
      "Manakel, grant me knowledge of good and evil and moral discernment.",
    daily_intention:
      "Today I discern between good and evil and choose the path of righteousness.",
  },
  {
    index: 67,
    name: "Ayael",
    start_time: "22:00",
    end_time: "22:20",
    archangel: "Asmodel",
    zodiac_sign: "Pisces",
    zodiac_degree_start: 0,
    zodiac_degree_end: 5,
    psalm: "Psalm 113",
    element: "Water",
    sephira: "Chokhmah",
    color: "Indigo",
    principality: "Divine Providence",
    spiritual_gift: "Trust in Providence",
    spiritual_description:
      "Ayael teaches trust in divine providence and helps see God's hand in all events.",
    invocation:
      "Ayael, help me trust in divine providence and see God's hand in all events.",
    daily_intention:
      "Today I trust in divine providence and see the divine hand in all circumstances.",
  },
  {
    index: 68,
    name: "Habuhiah",
    start_time: "22:20",
    end_time: "22:40",
    archangel: "Asmodel",
    zodiac_sign: "Pisces",
    zodiac_degree_start: 5,
    zodiac_degree_end: 10,
    psalm: "Psalm 25",
    element: "Water",
    sephira: "Chokhmah",
    color: "Indigo",
    principality: "Healing and Fecundity",
    spiritual_gift: "Fertility and Health",
    spiritual_description:
      "Habuhiah grants healing and fecundity, promoting health and fertility.",
    invocation:
      "Habuhiah, grant healing and promote health and fertility in my life.",
    daily_intention:
      "Today I receive healing and promote health and fertility in all areas of life.",
  },
  {
    index: 69,
    name: "Rochel",
    start_time: "22:40",
    end_time: "23:00",
    archangel: "Asmodel",
    zodiac_sign: "Pisces",
    zodiac_degree_start: 10,
    zodiac_degree_end: 15,
    psalm: "Psalm 44",
    element: "Water",
    sephira: "Chokhmah",
    color: "Indigo",
    principality: "Restitution of Lost Things",
    spiritual_gift: "Recovery and Restoration",
    spiritual_description:
      "Rochel helps in restitution of lost things and recovery of what was taken.",
    invocation:
      "Rochel, help me recover what was lost and restore what was taken.",
    daily_intention:
      "Today I trust in the restoration of what was lost and recovery of my blessings.",
  },
  {
    index: 70,
    name: "Jabamiah",
    start_time: "23:00",
    end_time: "23:20",
    archangel: "Asmodel",
    zodiac_sign: "Pisces",
    zodiac_degree_start: 15,
    zodiac_degree_end: 20,
    psalm: "Psalm 31",
    element: "Water",
    sephira: "Chokhmah",
    color: "Indigo",
    principality: "Regeneration of Nature",
    spiritual_gift: "Natural Renewal",
    spiritual_description:
      "Jabamiah governs regeneration of nature and promotes natural renewal cycles.",
    invocation:
      "Jabamiah, promote regeneration and natural renewal in my life.",
    daily_intention:
      "Today I align with natural renewal cycles and promote regeneration.",
  },
  {
    index: 71,
    name: "Haiaiel",
    start_time: "23:20",
    end_time: "23:40",
    archangel: "Asmodel",
    zodiac_sign: "Pisces",
    zodiac_degree_start: 20,
    zodiac_degree_end: 25,
    psalm: "Psalm 76",
    element: "Water",
    sephira: "Chokhmah",
    color: "Indigo",
    principality: "Divine Weapons",
    spiritual_gift: "Spiritual Protection",
    spiritual_description:
      "Haiaiel provides divine weapons for spiritual protection and defense.",
    invocation:
      "Haiaiel, provide divine weapons for my spiritual protection and defense.",
    daily_intention:
      "Today I am protected by divine weapons and defended from all harm.",
  },
  {
    index: 72,
    name: "Mumiah",
    start_time: "23:40",
    end_time: "00:00",
    archangel: "Asmodel",
    zodiac_sign: "Pisces",
    zodiac_degree_start: 25,
    zodiac_degree_end: 30,
    psalm: "Psalm 109",
    element: "Water",
    sephira: "Chokhmah",
    color: "Indigo",
    principality: "Endings and Rebirth",
    spiritual_gift: "Transformation",
    spiritual_description:
      "Mumiah governs endings and rebirth, facilitating transformation and new beginnings.",
    invocation:
      "Mumiah, help me embrace endings and facilitate rebirth and transformation.",
    daily_intention:
      "Today I embrace necessary endings and welcome transformation and rebirth.",
  },
];

const seasons = ["Winter", "Spring", "Summer", "Fall"];
const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];
const archangels = [
  "Metatron",
  "Raziel",
  "Tzaphkiel",
  "Zadkiel",
  "Camael",
  "Raphael",
  "Haniel",
  "Michael",
];

const subtitles = [
  "Sacred Frequencies",
  "Whispering Gates",
  "The Deck That Sees",
  "Avatars as Subdomains",
];

export default function AngelClockCompass() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedAngel, setSelectedAngel] = useState<Angel | null>(null);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const activeAngel = useMemo(() => {
    const now = currentTime;
    const currentTimeStr = `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
    return (
      angelsData.find((angel) => {
        const startTime = angel.start_time;
        const endTime = angel.end_time === "00:00" ? "24:00" : angel.end_time;
        return currentTimeStr >= startTime && currentTimeStr < endTime;
      }) || angelsData[angelsData.length - 1]
    );
  }, [currentTime]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

    const handleTyping = () => {
      const fullText = subtitles[currentSubtitleIndex];
      if (isDeleting) {
        if (displayedSubtitle.length > 0) {
          setDisplayedSubtitle(
            fullText.substring(0, displayedSubtitle.length - 1)
          );
        } else {
          setIsDeleting(false);
          setCurrentSubtitleIndex(
            (prevIndex) => (prevIndex + 1) % subtitles.length
          );
        }
      } else {
        if (displayedSubtitle.length < fullText.length) {
          setDisplayedSubtitle(
            fullText.substring(0, displayedSubtitle.length + 1)
          );
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [displayedSubtitle, isDeleting, currentSubtitleIndex]);

  const handleAngelClick = (angel: Angel, event: React.MouseEvent) => {
    setSelectedAngel(angel);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 snap-start flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto animate-fade-in w-full">
        {/* Modern Hero Section */}
        <div className="text-center mb-8 md:mb-16">
          <div className="p-6 md:p-12 shadow-holy border border-white/50 animate-scale-in">
            <p className="text-lg md:text-2xl font-light mb-4 text-spirit-gray tracking-wide">
              <span className="text-divine-blue font-semibold">ARGON.</span>{" "}
              presents
            </p>
            <p className="text-2xl md:text-4xl font-playfair text-divine-blue tracking-wider mb-6 font-medium">
              Selah.
            </p>

            <h1 className="text-4xl md:text-8xl font-bold font-playfair bg-gradient-to-r from-divine-blue via-sacred-gold to-divine-blue bg-clip-text text-transparent mb-6 md:mb-8 tracking-wider">
              TEAR COMPANY
            </h1>

            <p className="text-lg md:text-3xl font-light mb-6 md:mb-8 text-gray-700 tracking-wide">
              Not code. Not ritual. Presence.
            </p>

            <div className="h-8 md:h-12 mb-6 md:mb-8">
              <p className="text-lg md:text-2xl text-divine-blue font-medium">
                {displayedSubtitle}
                <span className="inline-block w-0.5 h-6 md:h-8 ml-1 bg-sacred-gold animate-pulse"></span>
              </p>
            </div>
          </div>
        </div>

        {/* Modern Clock Section */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-6xl font-bold font-playfair text-gray-800 mb-2 tracking-wide">
            ANGELIC TIME WHEEL
          </h2>
          <p className="text-base md:text-xl text-spirit-gray">
            Sacred Map of Time
          </p>
        </div>

        <div className="relative w-full max-w-[700px] aspect-square mx-auto transform perspective-1000">
          {/* 3D Wooden Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 rounded-full shadow-2xl border-4 border-amber-600 transform rotate-3 scale-105 opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 rounded-full shadow-xl border-4 border-amber-500 transform -rotate-2 scale-102 opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 rounded-full shadow-lg border-4 border-amber-400 transform rotate-1 scale-101 opacity-40"></div>

          {/* Main Wooden Surface */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-amber-400 to-amber-600 rounded-full shadow-sacred border-4 border-amber-300 overflow-hidden">
            {/* Wood Grain Texture */}
            <div className="absolute inset-0 opacity-30">
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-1 bg-gradient-to-r from-transparent via-amber-800/20 to-transparent"
                  style={{
                    top: `${i * 5}%`,
                    transform: `rotate(${Math.random() * 10 - 5}deg)`,
                  }}
                />
              ))}
            </div>

            {/* Burned Edges Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
          </div>

          <svg viewBox="0 0 700 700" className="w-full h-full relative z-10">
            <defs>
              <radialGradient id="woodenGradient" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#D97706" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#B45309" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#92400E" stopOpacity="0.7" />
              </radialGradient>
              <filter id="woodenGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="burnedGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient
                id="burnedGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#DC2626" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#DC2626" />
              </linearGradient>
              <linearGradient
                id="goldenGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>

            {/* Wooden rings with burned effect */}
            <circle
              cx="350"
              cy="350"
              r="340"
              fill="none"
              stroke="#92400E"
              strokeWidth="3"
              filter="url(#woodenGlow)"
            />
            <circle
              cx="350"
              cy="350"
              r="290"
              fill="none"
              stroke="#B45309"
              strokeWidth="2"
            />
            <circle
              cx="350"
              cy="350"
              r="240"
              fill="none"
              stroke="#D97706"
              strokeWidth="2"
            />
            <circle
              cx="350"
              cy="350"
              r="190"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2"
            />
            <circle
              cx="350"
              cy="350"
              r="140"
              fill="none"
              stroke="#FCD34D"
              strokeWidth="3"
              filter="url(#burnedGlow)"
            />

            {/* Burned divisions */}
            {Array.from({ length: 72 }, (_, i) => {
              const angle = i * 5 * (Math.PI / 180);
              const x1 = 350 + 140 * Math.cos(angle);
              const y1 = 350 + 140 * Math.sin(angle);
              const x2 = 350 + 340 * Math.cos(angle);
              const y2 = 350 + 340 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#92400E"
                  strokeWidth="1"
                  opacity="0.6"
                />
              );
            })}

            {/* Archangels */}
            {archangels.map((archangel, index) => {
              const angle = (index * 45 - 90) * (Math.PI / 180);
              const x = 350 + 315 * Math.cos(angle);
              const y = 350 + 315 * Math.sin(angle);
              const textAngle = index * 45;
              const shouldFlip = textAngle > 90 && textAngle < 270;
              return (
                <text
                  key={archangel}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs md:text-sm font-bold fill-gray-700"
                  transform={`rotate(${
                    shouldFlip ? textAngle + 180 : textAngle
                  }, ${x}, ${y})`}
                >
                  {archangel}
                </text>
              );
            })}

            {/* 72 Angels */}
            {angelsData.map((angel, index) => {
              const angle = index * 5 * (Math.PI / 180);
              const x = 350 + 265 * Math.cos(angle);
              const y = 350 + 265 * Math.sin(angle);
              const textAngle = index * 5;
              const shouldFlip = textAngle > 90 && textAngle < 270;
              const isActive = activeAngel?.index === angel.index;
              return (
                <g key={angel.index}>
                  {isActive && (
                    <circle
                      cx={x}
                      cy={y}
                      r="18"
                      fill="none"
                      stroke="url(#burnedGradient)"
                      strokeWidth="4"
                      filter="url(#burnedGlow)"
                    />
                  )}
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={`text-[10px] md:text-xs cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "font-bold fill-amber-600"
                        : "fill-amber-800 hover:fill-amber-600"
                    }`}
                    transform={`rotate(${
                      shouldFlip ? textAngle + 180 : textAngle
                    }, ${x}, ${y})`}
                    onClick={(e) => handleAngelClick(angel, e)}
                  >
                    {angel.name}
                  </text>
                </g>
              );
            })}

            {/* Zodiac Signs */}
            {zodiacSigns.map((sign, index) => {
              const angle = (index * 30 - 90) * (Math.PI / 180);
              const x = 350 + 215 * Math.cos(angle);
              const y = 350 + 215 * Math.sin(angle);
              const textAngle = index * 30;
              const shouldFlip = textAngle > 90 && textAngle < 270;
              return (
                <text
                  key={sign}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs md:text-sm fill-gray-600 font-medium"
                  transform={`rotate(${
                    shouldFlip ? textAngle + 180 : textAngle
                  }, ${x}, ${y})`}
                >
                  {sign}
                </text>
              );
            })}

            {/* Seasons */}
            {seasons.map((season, index) => {
              const angle = (index * 90 - 90) * (Math.PI / 180);
              const x = 350 + 165 * Math.cos(angle);
              const y = 350 + 165 * Math.sin(angle);
              const textAngle = index * 90;
              const shouldFlip = textAngle > 90 && textAngle < 270;
              return (
                <text
                  key={season}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-sm md:text-lg font-semibold fill-gray-700"
                  transform={`rotate(${
                    shouldFlip ? textAngle + 180 : textAngle
                  }, ${x}, ${y})`}
                >
                  {season}
                </text>
              );
            })}

            {/* Current Angel in center */}
            <text
              x="350"
              y="330"
              textAnchor="middle"
              className="text-lg md:text-2xl font-bold fill-amber-900 font-playfair"
              filter="url(#woodenGlow)"
            >
              {activeAngel?.name}
            </text>
            <text
              x="350"
              y="355"
              textAnchor="middle"
              className="text-sm md:text-lg fill-amber-800"
            >
              {activeAngel?.start_time} - {activeAngel?.end_time}
            </text>
            <text
              x="350"
              y="375"
              textAnchor="middle"
              className="text-xs md:text-sm fill-amber-700 font-medium"
            >
              {activeAngel?.archangel}
            </text>

            {/* Time pointer */}
            {activeAngel && (
              <line
                x1="350"
                y1="350"
                x2={
                  350 +
                  200 * Math.cos((activeAngel.index - 1) * 5 * (Math.PI / 180))
                }
                y2={
                  350 +
                  200 * Math.sin((activeAngel.index - 1) * 5 * (Math.PI / 180))
                }
                stroke="url(#goldenGradient)"
                strokeWidth="6"
                filter="url(#burnedGlow)"
              />
            )}
          </svg>
        </div>
      </div>

      {/* Modern Angel Modal */}
      {selectedAngel && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setSelectedAngel(null)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white/95 backdrop-blur-xl border border-white/60 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sacred animate-scale-in max-h-[90vh] overflow-y-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-4xl font-bold font-playfair text-gray-800 mb-2">
                  {selectedAngel.name}
                </h3>
                <p className="text-sm text-divine-blue font-medium">
                  {selectedAngel.start_time} - {selectedAngel.end_time}
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Zodiac:</span>
                  <span className="text-divine-blue">
                    {selectedAngel.zodiac_sign} (
                    {selectedAngel.zodiac_degree_start}° -{" "}
                    {selectedAngel.zodiac_degree_end}°)
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">
                    Principality:
                  </span>
                  <span className="text-gray-600">
                    {selectedAngel.principality}
                  </span>
                </div>

                <div className="py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700 block mb-1">
                    Spiritual Gift:
                  </span>
                  <span className="text-gray-600">
                    {selectedAngel.spiritual_gift}
                  </span>
                </div>

                <div className="py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700 block mb-2">
                    Divine Guidance:
                  </span>
                  <p className="text-gray-600 leading-relaxed text-xs italic">
                    {selectedAngel.spiritual_description}
                  </p>
                </div>

                <div className="py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700 block mb-2">
                    Sacred Invocation:
                  </span>
                  <p className="text-divine-blue leading-relaxed text-xs italic bg-heaven-blue p-3 rounded-xl">
                    "{selectedAngel.invocation}"
                  </p>
                </div>

                <div className="py-2">
                  <span className="font-semibold text-gray-700 block mb-2">
                    Daily Intention:
                  </span>
                  <p className="text-gray-600 leading-relaxed text-xs italic">
                    {selectedAngel.daily_intention}
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setSelectedAngel(null)}
                  className="px-6 md:px-8 py-3 bg-divine-blue hover:bg-blue-600 text-white rounded-xl transition-all duration-300 font-medium shadow-holy"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
