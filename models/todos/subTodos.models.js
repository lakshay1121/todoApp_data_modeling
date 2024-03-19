import mongoose from 'mongoose';

const subTodoSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    markedAsDone: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const SubTodo = mongoose.model('SubTodo', subTodoSchema);
