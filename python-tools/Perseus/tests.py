from unittest import TestCase
from seeker import Seeker, Token

class MappingTestCase(TestCase):
	"""Test that dependency trees are getting mapped correctly."""

	def runTest(self):

		s = Seeker('TS', 'test/unit_test.xml', 0)

		hand_dict = {
		'1': [[1,7,8,9,10,11,12,13,14,15,16,17,18],'1','3','OBJ','n-s---ma-','a)nh/r1',False],
		'2': [[2],'2','3','OBJ','p-s---md-','e)gw/1',True],
		'3': [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],'3','0','PRED','v2spma---','e)ne/pw1',True],
		'4': [[4],'4','5','AuxX','u--------','comma1',True],
		'5': [[4,5,6],'5','3','ExD','n-s---fv-','*mou=sa1',True],
		'6': [[6],'6','5','AuxX','u--------','comma1',True],
		'7': [[7],'7','1','ATR','a-s---ma-','polu/tropos1',True],
		'8': [[8],'8','12','AuxX','u--------','comma1',True],
		'9': [[9],'9','12','SBJ','p-s---mn-','o(/s1',True],
		'10': [[10],'10','11','AuxZ','d--------','ma/la1',True],
		'11': [[10,11],'11','12','ADV','d--------','polu/s',True],
		'12': [[8,9,10,11,12,13,14,15,16,17,18],'12','1','ATR','v3saip---','pla/zw1',True],
		'13': [[13],'13','14','AuxX','u--------','comma1',True],
		'14': [[13,14,15,16,17,18],'14','12','AuxC','c--------','e)pei/1',True],
		'15': [[15],'15','17','ATR','n-s---fg-','*troi/a1',True],
		'16': [[16],'16','17','ATR','a-s---na-','i(ero/s1',True],
		'17': [[15,16,17],'17','18','OBJ','n-s---na-','ptoli/eqron1',True],
		'18': [[15,16,17,18],'18','14','ADV','v3saia---','pe/rqw1',True],
		'19': [[19],'19','0','AuxK','u--------','punc1',True]
		}

		for tree in s.trees.values():
			for key in tree.list_form:
				self.assertEqual(tree.list_form[key], hand_dict[key])

class ClauseTypesTestCase(TestCase):

	def runTest(self):

		s = Seeker('TS', 'test/unit_test.xml', 0)

		dct = s.clause_types()

		hand_dict = {'2185541': ['o:e:t:-:o:-:t:f:f', 'v:p:-:s:-:-:-:f:f', 'v:e:n:-:o:-:f:f:t']}

		for key in dct:
			self.assertEqual(dct[key], hand_dict[key])

class ClassifyDiscontinuousTestCase(TestCase):

	def runTest(self):

		s = Seeker('TS', 'test/test.xml', 0)

		dct = s.classify_discontinuous('OBJ|SBJ')

		hand_dict = {'yxxv': 0, 'xxv': 2, 'yxvx': 2, 'xvx': 2, 'vxx': 0}

		for key in dct:
			try:
				self.assertEqual(dct[key], hand_dict[key])
			except AssertionError:
				print "Generated " + key + " " + str(dct[key]) + " does not equal hand-calculated " + str(hand_dict[key] ) + "."
def main():
	t1 = MappingTestCase()
	t1.runTest()

	t2 = ClauseTypesTestCase()
	t2.runTest()

	t3 = ClassifyDiscontinuousTestCase()
	t3.runTest()	

if __name__ == '__main__':
	main()