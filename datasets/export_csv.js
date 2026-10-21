// datasets/export_csv.js
const fs = require('fs');
const path = require('path');

const lessons = require('../server/data/realNumbersLessons');
const exercises = require('../server/data/exercisesData');

const escapeCsv = (str) => {
  if (str === null || str === undefined) return '""';
  return '"' + String(str).replace(/"/g, '""').replace(/[\r\n]+/g, ' ') + '"';
};

// 1. Export Exercises to CSV
const exHeaders = [
  'exerciseNumber',
  'questionNumber',
  'subPart',
  'sourcePage',
  'questionText',
  'solutionText',
  'teachingApproach',
  'commonPitfalls'
];

const exRows = [exHeaders.join(',')];
for (const e of exercises) {
  exRows.push([
    escapeCsv(e.exerciseNumber),
    escapeCsv(e.questionNumber),
    escapeCsv(e.subPart),
    escapeCsv(e.sourcePage),
    escapeCsv(e.questionText),
    escapeCsv(e.solutionText),
    escapeCsv(e.teachingApproach),
    escapeCsv(e.commonPitfalls)
  ].join(','));
}

fs.writeFileSync(path.join(__dirname, 'exercises_dataset.csv'), exRows.join('\n'));

// 2. Export Lessons to CSV
const lessonHeaders = [
  'lessonNumber',
  'slug',
  'chapter',
  'section',
  'title',
  'sourcePages',
  'estimatedMinutes',
  'difficulty',
  'objective',
  'storyHeadline',
  'storyKeyTakeaway',
  'teacherScriptEnglish',
  'teacherScriptTelugu'
];

const lessonRows = [lessonHeaders.join(',')];
for (const l of lessons) {
  lessonRows.push([
    escapeCsv(l.lessonNumber),
    escapeCsv(l.slug),
    escapeCsv(l.chapter),
    escapeCsv(l.section),
    escapeCsv(l.title),
    escapeCsv(l.sourcePages),
    escapeCsv(l.estimatedMinutes),
    escapeCsv(l.difficulty),
    escapeCsv(l.objective),
    escapeCsv(l.story ? l.story.headline : ''),
    escapeCsv(l.story ? l.story.keyTakeaway : ''),
    escapeCsv(l.teacherScript ? l.teacherScript.english : ''),
    escapeCsv(l.teacherScript ? l.teacherScript.telugu : '')
  ].join(','));
}

fs.writeFileSync(path.join(__dirname, 'lessons_dataset.csv'), lessonRows.join('\n'));

console.log('CSV datasets generated successfully!');
