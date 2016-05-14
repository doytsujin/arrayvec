var searchIndex = {};
searchIndex["arrayvec"] = {"doc":"**arrayvec** provides the types `ArrayVec` and `ArrayString`:\narray-backed vector and string types, which store their contents inline.","items":[[11,"start","core::ops","",0,{"inputs":[{"name":"rangefrom"}],"output":{"name":"option"}}],[11,"end","","",1,{"inputs":[{"name":"rangeto"}],"output":{"name":"option"}}],[11,"start","","",2,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"end","","",2,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"call","odds::fix","",3,{"inputs":[{"name":"fix"},{"name":"t"}],"output":{"name":"r"}}],[11,"clone","","",3,{"inputs":[{"name":"fix"}],"output":{"name":"fix"}}],[11,"call_once","","",3,null],[11,"call_mut","","",3,null],[11,"call","","",3,null],[11,"clone","odds::string","",4,{"inputs":[{"name":"prefixes"}],"output":{"name":"prefixes"}}],[11,"next","","",4,{"inputs":[{"name":"prefixes"}],"output":{"name":"option"}}],[11,"clone","","",5,{"inputs":[{"name":"suffixes"}],"output":{"name":"suffixes"}}],[11,"next","","",5,{"inputs":[{"name":"suffixes"}],"output":{"name":"option"}}],[11,"clone","","",6,{"inputs":[{"name":"substrings"}],"output":{"name":"substrings"}}],[11,"next","","",6,{"inputs":[{"name":"substrings"}],"output":{"name":"option"}}],[11,"insert_str","collections::string","**Panics** if `index` is out of bounds.",7,null],[11,"splice","collections::vec","",8,null],[11,"retain_mut","","",8,null],[8,"RangeArgument","arrayvec","**IndexRange** is implemented by Rust&#39;s built-in range types, produced\nby range syntax like `..`, `a..`, `..b` or `c..d`.",null,null],[11,"start","","Start index (inclusive)",9,{"inputs":[{"name":"rangeargument"}],"output":{"name":"option"}}],[11,"end","","End index (exclusive)",9,{"inputs":[{"name":"rangeargument"}],"output":{"name":"option"}}],[3,"ArrayString","","A string with a fixed capacity.",null,null],[3,"ArrayVec","","A vector with a fixed capacity.",null,null],[3,"IntoIter","","By-value iterator for `ArrayVec`.",null,null],[3,"Drain","","A draining iterator for `ArrayVec`.",null,null],[3,"CapacityError","","Error value indicating insufficient capacity",null,null],[11,"new","","Create a new empty `ArrayString`.",10,{"inputs":[],"output":{"name":"arraystring"}}],[11,"from","","Create a new `ArrayString` from a `str`.",10,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"capacity","","Return the capacity of the `ArrayString`.",10,{"inputs":[{"name":"arraystring"}],"output":{"name":"usize"}}],[11,"push","","Adds the given char to the end of the string.",10,{"inputs":[{"name":"arraystring"},{"name":"char"}],"output":{"name":"result"}}],[11,"push_str","","Adds the given string slice to the end of the string.",10,{"inputs":[{"name":"arraystring"},{"name":"str"}],"output":{"name":"result"}}],[11,"clear","","Make the string empty.",10,{"inputs":[{"name":"arraystring"}],"output":null}],[11,"set_len","","Set the strings&#39;s length.",10,{"inputs":[{"name":"arraystring"},{"name":"usize"}],"output":null}],[11,"as_str","","Return a string slice of the whole `ArrayString`.",10,{"inputs":[{"name":"arraystring"}],"output":{"name":"str"}}],[11,"deref","","",10,{"inputs":[{"name":"arraystring"}],"output":{"name":"str"}}],[11,"deref_mut","","",10,{"inputs":[{"name":"arraystring"}],"output":{"name":"str"}}],[11,"eq","","",10,{"inputs":[{"name":"arraystring"},{"name":"self"}],"output":{"name":"bool"}}],[11,"eq","","",10,{"inputs":[{"name":"arraystring"},{"name":"str"}],"output":{"name":"bool"}}],[11,"hash","","",10,{"inputs":[{"name":"arraystring"},{"name":"h"}],"output":null}],[11,"borrow","","",10,{"inputs":[{"name":"arraystring"}],"output":{"name":"str"}}],[11,"as_ref","","",10,{"inputs":[{"name":"arraystring"}],"output":{"name":"str"}}],[11,"fmt","","",10,{"inputs":[{"name":"arraystring"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",10,{"inputs":[{"name":"arraystring"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"write_str","","",10,{"inputs":[{"name":"arraystring"},{"name":"str"}],"output":{"name":"result"}}],[11,"clone","","",10,{"inputs":[{"name":"arraystring"}],"output":{"name":"arraystring"}}],[11,"clone_from","","",10,{"inputs":[{"name":"arraystring"},{"name":"self"}],"output":null}],[8,"Array","","Trait for fixed size arrays.",null,null],[16,"Item","","The array&#39;s element type",11,null],[11,"drop","","",12,{"inputs":[{"name":"arrayvec"}],"output":null}],[11,"new","","Create a new empty `ArrayVec`.",12,{"inputs":[],"output":{"name":"arrayvec"}}],[11,"len","","Return the number of elements in the `ArrayVec`.",12,{"inputs":[{"name":"arrayvec"}],"output":{"name":"usize"}}],[11,"capacity","","Return the capacity of the `ArrayVec`.",12,{"inputs":[{"name":"arrayvec"}],"output":{"name":"usize"}}],[11,"push","","Push `element` to the end of the vector.",12,{"inputs":[{"name":"arrayvec"},{"name":"item"}],"output":{"name":"option"}}],[11,"insert","","Insert `element` in position `index`.",12,{"inputs":[{"name":"arrayvec"},{"name":"usize"},{"name":"item"}],"output":{"name":"option"}}],[11,"pop","","Remove the last element in the vector.",12,{"inputs":[{"name":"arrayvec"}],"output":{"name":"option"}}],[11,"swap_remove","","Remove the element at `index` and swap the last element into its place.",12,{"inputs":[{"name":"arrayvec"},{"name":"usize"}],"output":{"name":"option"}}],[11,"remove","","Remove the element at `index` and shift down the following elements.",12,{"inputs":[{"name":"arrayvec"},{"name":"usize"}],"output":{"name":"option"}}],[11,"clear","","Remove all elements in the vector.",12,{"inputs":[{"name":"arrayvec"}],"output":null}],[11,"retain","","Retains only the elements specified by the predicate.",12,{"inputs":[{"name":"arrayvec"},{"name":"f"}],"output":null}],[11,"set_len","","Set the vector&#39;s length without dropping or moving out elements",12,{"inputs":[{"name":"arrayvec"},{"name":"usize"}],"output":null}],[11,"drain","","Create a draining iterator that removes the specified range in the vector\nand yields the removed items from start to end. The element range is\nremoved even if the iterator is not consumed until the end.",12,{"inputs":[{"name":"arrayvec"},{"name":"r"}],"output":{"name":"drain"}}],[11,"into_inner","","Return the inner fixed size array, if it is full to its capacity.",12,{"inputs":[{"name":"arrayvec"}],"output":{"name":"result"}}],[11,"dispose","","Dispose of `self` without the overwriting that is needed in Drop.",12,{"inputs":[{"name":"arrayvec"}],"output":null}],[11,"as_slice","","Return a slice containing all elements of the vector.",12,null],[11,"as_mut_slice","","Return a mutable slice containing all elements of the vector.",12,null],[11,"deref","","",12,null],[11,"deref_mut","","",12,null],[11,"from","","",12,{"inputs":[{"name":"a"}],"output":{"name":"self"}}],[11,"into_iter","","",12,{"inputs":[{"name":"arrayvec"}],"output":{"name":"intoiter"}}],[11,"next","","",13,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"size_hint","","",13,null],[11,"next_back","","",13,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"drop","","",13,{"inputs":[{"name":"intoiter"}],"output":null}],[11,"next","","",14,{"inputs":[{"name":"drain"}],"output":{"name":"option"}}],[11,"size_hint","","",14,null],[11,"next_back","","",14,{"inputs":[{"name":"drain"}],"output":{"name":"option"}}],[11,"drop","","",14,{"inputs":[{"name":"drain"}],"output":null}],[11,"extend","","",12,{"inputs":[{"name":"arrayvec"},{"name":"t"}],"output":null}],[11,"from_iter","","",12,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"clone","","",12,{"inputs":[{"name":"arrayvec"}],"output":{"name":"self"}}],[11,"clone_from","","",12,{"inputs":[{"name":"arrayvec"},{"name":"self"}],"output":null}],[11,"hash","","",12,{"inputs":[{"name":"arrayvec"},{"name":"h"}],"output":null}],[11,"eq","","",12,{"inputs":[{"name":"arrayvec"},{"name":"self"}],"output":{"name":"bool"}}],[11,"eq","","",12,null],[11,"borrow","","",12,null],[11,"borrow_mut","","",12,null],[11,"as_ref","","",12,null],[11,"as_mut","","",12,null],[11,"fmt","","",12,{"inputs":[{"name":"arrayvec"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",12,{"inputs":[],"output":{"name":"arrayvec"}}],[11,"partial_cmp","","",12,{"inputs":[{"name":"arrayvec"},{"name":"arrayvec"}],"output":{"name":"option"}}],[11,"lt","","",12,{"inputs":[{"name":"arrayvec"},{"name":"self"}],"output":{"name":"bool"}}],[11,"le","","",12,{"inputs":[{"name":"arrayvec"},{"name":"self"}],"output":{"name":"bool"}}],[11,"ge","","",12,{"inputs":[{"name":"arrayvec"},{"name":"self"}],"output":{"name":"bool"}}],[11,"gt","","",12,{"inputs":[{"name":"arrayvec"},{"name":"self"}],"output":{"name":"bool"}}],[11,"cmp","","",12,{"inputs":[{"name":"arrayvec"},{"name":"arrayvec"}],"output":{"name":"ordering"}}],[11,"write","","",12,null],[11,"flush","","",12,{"inputs":[{"name":"arrayvec"}],"output":{"name":"result"}}],[11,"partial_cmp","","",15,{"inputs":[{"name":"capacityerror"},{"name":"capacityerror"}],"output":{"name":"option"}}],[11,"lt","","",15,{"inputs":[{"name":"capacityerror"},{"name":"capacityerror"}],"output":{"name":"bool"}}],[11,"le","","",15,{"inputs":[{"name":"capacityerror"},{"name":"capacityerror"}],"output":{"name":"bool"}}],[11,"gt","","",15,{"inputs":[{"name":"capacityerror"},{"name":"capacityerror"}],"output":{"name":"bool"}}],[11,"ge","","",15,{"inputs":[{"name":"capacityerror"},{"name":"capacityerror"}],"output":{"name":"bool"}}],[11,"eq","","",15,{"inputs":[{"name":"capacityerror"},{"name":"capacityerror"}],"output":{"name":"bool"}}],[11,"ne","","",15,{"inputs":[{"name":"capacityerror"},{"name":"capacityerror"}],"output":{"name":"bool"}}],[11,"cmp","","",15,{"inputs":[{"name":"capacityerror"},{"name":"capacityerror"}],"output":{"name":"ordering"}}],[11,"clone","","",15,{"inputs":[{"name":"capacityerror"}],"output":{"name":"capacityerror"}}],[11,"element","","Extract the overflowing element",15,{"inputs":[{"name":"capacityerror"}],"output":{"name":"t"}}],[11,"simplify","","Convert into a `CapacityError` that does not carry an element.",15,{"inputs":[{"name":"capacityerror"}],"output":{"name":"capacityerror"}}],[11,"description","","",15,{"inputs":[{"name":"capacityerror"}],"output":{"name":"str"}}],[11,"fmt","","",15,{"inputs":[{"name":"capacityerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",15,{"inputs":[{"name":"capacityerror"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"RangeFrom"],[3,"RangeTo"],[3,"Range"],[3,"Fix"],[3,"Prefixes"],[3,"Suffixes"],[3,"Substrings"],[3,"String"],[3,"Vec"],[8,"RangeArgument"],[3,"ArrayString"],[8,"Array"],[3,"ArrayVec"],[3,"IntoIter"],[3,"Drain"],[3,"CapacityError"]]};
searchIndex["nodrop"] = {"doc":"","items":[[3,"NoDrop","nodrop","A type holding **T** that will not call its destructor on drop",null,null],[11,"new","","Create a new **NoDrop**.",0,{"inputs":[{"name":"t"}],"output":{"name":"nodrop"}}],[11,"into_inner","","Extract the inner value.",0,{"inputs":[{"name":"nodrop"}],"output":{"name":"t"}}],[11,"drop","","",0,{"inputs":[{"name":"nodrop"}],"output":null}],[11,"deref","","",0,{"inputs":[{"name":"nodrop"}],"output":{"name":"t"}}],[11,"deref_mut","","",0,{"inputs":[{"name":"nodrop"}],"output":{"name":"t"}}]],"paths":[[3,"NoDrop"]]};
searchIndex["odds"] = {"doc":"Odds and ends — collection miscellania.","items":[[3,"Fix","odds","Fixpoint combinator for rust closures, generalized over the return type.",null,null],[12,"0","","",0,null],[5,"ref_eq","","Compare if **a** and **b** are equal *as pointers*.",null,{"inputs":[{"name":"t"},{"name":"t"}],"output":{"name":"bool"}}],[5,"ptr_eq","","Compare if **a** and **b** are equal pointers.",null,null],[5,"raw_byte_repr","","Safe to use with any wholly initialized memory `ptr`",null,null],[5,"get_unchecked","","Use `debug_assert!` to check indexing in debug mode. In release mode, no checks are done.",null,null],[5,"get_unchecked_mut","","Use `debug_assert!` to check indexing in debug mode. In release mode, no checks are done.",null,null],[5,"debug_assert_unreachable","","Act as `debug_assert!` in debug mode, asserting that this point is not reached.",null,{"inputs":[],"output":null}],[5,"slice_unchecked","","Check slicing bounds in debug mode, otherwise just act as an unchecked\nslice call.",null,null],[5,"slice_unchecked_mut","","Check slicing bounds in debug mode, otherwise just act as an unchecked\nslice call.",null,null],[5,"ref_slice","","Create a length 1 slice out of a reference",null,null],[5,"ref_slice_mut","","Create a length 1 mutable slice out of a reference",null,null],[11,"start","core::ops","",1,{"inputs":[{"name":"rangefrom"}],"output":{"name":"option"}}],[11,"end","","",2,{"inputs":[{"name":"rangeto"}],"output":{"name":"option"}}],[11,"start","","",3,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"end","","",3,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"call","odds","",0,{"inputs":[{"name":"fix"},{"name":"t"}],"output":{"name":"r"}}],[11,"clone","","",0,{"inputs":[{"name":"fix"}],"output":{"name":"self"}}],[11,"call_once","","",0,null],[11,"call_mut","","",0,null],[11,"call","","",0,null],[0,"string","","Extensions to `&amp;str` and `String`",null,null],[3,"Prefixes","odds::string","Iterator of all non-empty prefixes",null,null],[3,"Suffixes","","Iterator of all non-empty suffixes",null,null],[3,"Substrings","","Iterator of all non-empty substrings",null,null],[8,"StrExt","","Extra methods for `str`",null,null],[10,"rep","","Repeat the string `n` times.",4,{"inputs":[{"name":"strext"},{"name":"usize"}],"output":{"name":"string"}}],[10,"append","","Requires `feature=&quot;std&quot;`",4,{"inputs":[{"name":"strext"},{"name":"str"}],"output":{"name":"string"}}],[10,"prefixes","","All non-empty prefixes",4,{"inputs":[{"name":"strext"}],"output":{"name":"prefixes"}}],[10,"suffixes","","All non-empty suffixes",4,{"inputs":[{"name":"strext"}],"output":{"name":"suffixes"}}],[10,"substrings","","Produce all non-empty substrings",4,{"inputs":[{"name":"strext"}],"output":{"name":"substrings"}}],[10,"is_acceptable_index","","Return `true` if `index` is acceptable for slicing the string.",4,{"inputs":[{"name":"strext"},{"name":"usize"}],"output":{"name":"bool"}}],[8,"StrSlice","","Extension trait for `str` for string slicing without panicking",null,null],[10,"get_slice","","Return a slice of the string, if it is in bounds /and on character boundaries/,\notherwise return `None`",5,{"inputs":[{"name":"strslice"},{"name":"r"}],"output":{"name":"option"}}],[8,"StringExt","","Extra methods for `String`",null,null],[10,"insert_str","","**Panics** if `index` is out of bounds.",6,{"inputs":[{"name":"stringext"},{"name":"usize"},{"name":"str"}],"output":null}],[11,"clone","","",7,{"inputs":[{"name":"prefixes"}],"output":{"name":"prefixes"}}],[11,"next","","",7,{"inputs":[{"name":"prefixes"}],"output":{"name":"option"}}],[11,"clone","","",8,{"inputs":[{"name":"suffixes"}],"output":{"name":"suffixes"}}],[11,"next","","",8,{"inputs":[{"name":"suffixes"}],"output":{"name":"option"}}],[11,"clone","","",9,{"inputs":[{"name":"substrings"}],"output":{"name":"substrings"}}],[11,"next","","",9,{"inputs":[{"name":"substrings"}],"output":{"name":"option"}}],[11,"insert_str","collections::string","**Panics** if `index` is out of bounds.",10,{"inputs":[{"name":"string"},{"name":"usize"},{"name":"str"}],"output":null}],[0,"vec","odds","Extensions to `Vec`",null,null],[8,"VecExt","odds::vec","Extra methods for `Vec&lt;T&gt;`",null,null],[10,"splice","","Remove elements in a range, and insert from an iterator in their place.",11,{"inputs":[{"name":"vecext"},{"name":"r"},{"name":"i"}],"output":null}],[10,"retain_mut","","Retains only the elements specified by the predicate.",11,{"inputs":[{"name":"vecext"},{"name":"f"}],"output":null}],[11,"splice","collections::vec","",12,{"inputs":[{"name":"vec"},{"name":"r"},{"name":"i"}],"output":null}],[11,"retain_mut","","",12,{"inputs":[{"name":"vec"},{"name":"f"}],"output":null}],[8,"IndexRange","odds","**IndexRange** is implemented by Rust&#39;s built-in range types, produced\nby range syntax like `..`, `a..`, `..b` or `c..d`.",null,null],[11,"start","","Start index (inclusive)",13,{"inputs":[{"name":"indexrange"}],"output":{"name":"option"}}],[11,"end","","End index (exclusive)",13,{"inputs":[{"name":"indexrange"}],"output":{"name":"option"}}],[11,"start","","Start index (inclusive)",13,{"inputs":[{"name":"indexrange"}],"output":{"name":"option"}}],[11,"end","","End index (exclusive)",13,{"inputs":[{"name":"indexrange"}],"output":{"name":"option"}}]],"paths":[[3,"Fix"],[3,"RangeFrom"],[3,"RangeTo"],[3,"Range"],[8,"StrExt"],[8,"StrSlice"],[8,"StringExt"],[3,"Prefixes"],[3,"Suffixes"],[3,"Substrings"],[3,"String"],[8,"VecExt"],[3,"Vec"],[8,"IndexRange"]]};
initSearch(searchIndex);
