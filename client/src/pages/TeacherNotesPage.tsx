// client/src/pages/TeacherNotesPage.tsx
import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { TeacherNote, Lesson } from '../types';
import { FileText, Plus, Trash2, Edit2, Search, Bookmark } from 'lucide-react';

export const TeacherNotesPage: React.FC = () => {
  const [notes, setNotes] = useState<TeacherNote[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedTag, setSelectedTag] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modal / Form state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    lessonId: 'fundamental-theorem-of-arithmetic',
    lessonTitle: 'The Fundamental Theorem of Arithmetic & Factor Trees',
    title: '',
    content: '',
    tag: 'Pedagogy' as any,
  });

  const tags = ['ALL', 'Pedagogy', 'Time Management', 'Student Doubts', 'Board Plan', 'Classroom Activity'];

  const loadData = async () => {
    setLoading(true);
    try {
      const [notesRes, lessonsRes] = await Promise.all([
        api.getNotes(),
        api.getLessons(),
      ]);
      setNotes(notesRes.notes || []);
      setLessons(lessonsRes.lessons || []);
    } catch (err) {
      console.error('Error fetching teacher notes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      lessonId: lessons[0]?.slug || 'fundamental-theorem-of-arithmetic',
      lessonTitle: lessons[0]?.title || 'Fundamental Theorem of Arithmetic',
      title: '',
      content: '',
      tag: 'Pedagogy',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (note: TeacherNote) => {
    setEditingId(note._id);
    setFormData({
      lessonId: note.lessonId,
      lessonTitle: note.lessonTitle,
      title: note.title,
      content: note.content,
      tag: note.tag,
    });
    setIsModalOpen(true);
  };

  const handleSaveNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content) return;

    try {
      if (editingId) {
        await api.updateNote(editingId, formData);
      } else {
        await api.createNote(formData);
      }
      setIsModalOpen(false);
      loadData();
    } catch (err) {
      console.error('Error saving note:', err);
    }
  };

  const handleDeleteNote = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this teaching note?')) return;
    try {
      await api.deleteNote(id);
      setNotes(prev => prev.filter(n => n._id !== id));
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  const filteredNotes = notes.filter((n) => {
    const matchesTag = selectedTag === 'ALL' || n.tag === selectedTag;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.lessonTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.08)] gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[rgba(0,255,136,0.12)] border border-[rgba(0,255,136,0.3)] text-[#00ff88]">
              <FileText className="w-5 h-5" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-tech tracking-wide text-white">
              TEACHER NOTES: <span className="text-[#00ff88]">CLASSROOM LOG</span>
            </h1>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Personal teaching reflections, pacing insights, and classroom observations
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="cyber-btn-primary px-4 py-2 text-xs font-mono font-bold flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          Add Teaching Note
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Tag Filters */}
        <div className="flex overflow-x-auto gap-2 w-full sm:w-auto pb-1">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTag(t)}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg whitespace-nowrap transition-all border ${
                selectedTag === t
                  ? 'bg-[rgba(0,255,136,0.15)] text-[#00ff88] border-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.3)]'
                  : 'bg-[#141b24] text-slate-400 border-[rgba(255,255,255,0.08)] hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search notes..."
            className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff88] font-mono"
          />
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading && (
          <div className="col-span-2 text-center py-12 text-slate-400 font-mono text-xs">
            Loading teacher notes...
          </div>
        )}

        {!loading && filteredNotes.length === 0 && (
          <div className="col-span-2 text-center py-16 text-slate-400 text-xs cyber-card rounded-2xl border border-dashed border-[rgba(255,255,255,0.1)] p-8">
            <Bookmark className="w-8 h-8 mx-auto text-slate-500 mb-2" />
            <p className="font-tech font-bold text-slate-300">NO NOTES RECORDED</p>
            <p className="mt-1 font-mono text-slate-500">Add personal reflections on pacing, student doubts, or factor tree tips!</p>
          </div>
        )}

        {!loading && filteredNotes.map((note) => (
          <div
            key={note._id}
            className="cyber-card p-5 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0f1419] flex flex-col justify-between hover:border-[rgba(0,255,136,0.3)] transition-all shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[rgba(0,212,255,0.15)] text-[#00d4ff] border border-[rgba(0,212,255,0.3)]">
                  {note.tag}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {new Date(note.updatedAt || note.createdAt).toLocaleDateString()}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-1 font-sans">{note.title}</h3>
              <p className="text-[11px] font-mono text-slate-400 mb-3">
                Concept: <span className="text-[#00ff88] font-semibold">{note.lessonTitle}</span>
              </p>

              <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed bg-[#050810] p-3.5 rounded-xl border border-[rgba(255,255,255,0.06)] font-sans shadow-inner">
                {note.content}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-end gap-2 text-xs">
              <button
                onClick={() => handleOpenEdit(note)}
                className="p-1.5 rounded-lg bg-[#141b24] hover:bg-[#1a2332] text-slate-300 border border-[rgba(255,255,255,0.08)] transition-colors"
                title="Edit Note"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleDeleteNote(note._id)}
                className="p-1.5 rounded-lg bg-[rgba(255,107,107,0.1)] hover:bg-[rgba(255,107,107,0.2)] text-[#ff6b6b] border border-[rgba(255,107,107,0.3)] transition-colors"
                title="Delete Note"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Note Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050810]/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-lg cyber-card p-6 rounded-2xl border border-[rgba(0,255,136,0.3)] bg-[#0f1419] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <h3 className="text-lg font-bold font-tech text-white mb-4">
              {editingId ? 'EDIT TEACHING NOTE' : 'NEW TEACHING OBSERVATION'}
            </h3>

            <form onSubmit={handleSaveNote} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-slate-400 font-mono mb-1">ATTACHED LESSON CONCEPT:</label>
                <select
                  value={formData.lessonId}
                  onChange={(e) => {
                    const l = lessons.find(les => les.slug === e.target.value);
                    setFormData({
                      ...formData,
                      lessonId: e.target.value,
                      lessonTitle: l?.title || 'Real Numbers',
                    });
                  }}
                  className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-[#00ff88] text-xs"
                >
                  {lessons.map(l => (
                    <option key={l.slug} value={l.slug}>
                      {l.lessonNumber}. {l.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-400 font-mono mb-1">NOTE TITLE:</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Factor tree pacing observation..."
                  className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff88]"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-mono mb-1">CATEGORY TAG:</label>
                <select
                  value={formData.tag}
                  onChange={(e) => setFormData({ ...formData, tag: e.target.value as any })}
                  className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-[#00ff88] text-xs"
                >
                  {tags.filter(t => t !== 'ALL').map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-400 font-mono mb-1">OBSERVATION CONTENT:</label>
                <textarea
                  required
                  rows={4}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write your pedagogical tips, common student errors, or board pacing remarks..."
                  className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff88] resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="cyber-btn-secondary px-4 py-2 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cyber-btn-primary px-4 py-2 font-bold"
                >
                  Save Note
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
