import {reactive, ref} from "vue";

interface IStudent {
	name?: string
	age?: number
	school?: ISchool
}

interface ISchool {
	name: string
}

export default function useStudent() {

	const students: IStudent = reactive({
		name: '',
		age: undefined,
		school: {
			name: '',
		}
	})
	const school = ref('')

	const outObj = (): void => {
		console.log(students.name, students.age, school.value)
	}

	return {
		students,
		school,
		outObj
	}
}
