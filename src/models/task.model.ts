
import { model, Schema } from "mongoose";

type TaskProps = {
    description: string;
    completed: boolean
}

type TaskType = TaskProps & Document

const taskSchema = new Schema<TaskType>({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
})

export const Task = model<TaskType>('task', taskSchema)

