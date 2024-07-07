import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  teacherEmail: {
    type: String,
    required: true
  },
  submitted: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Submission'
  }]
}, { timestamps: true });

export default mongoose.models.Assignment || mongoose.model('Assignment', assignmentSchema, 'assignments');
